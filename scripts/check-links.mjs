import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist');
const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
async function walk(dir) { const entries = await readdir(dir, {withFileTypes:true}); return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir,e.name)) : path.join(dir,e.name)))).flat(); }
const files = await walk(root);
const pages = files.filter(f=>f.endsWith('.html')||f.endsWith('.css'));
let checked=0;const errors=[];
for(const file of pages) {
 const html=await readFile(file,'utf8');
 const relative=path.relative(root,file).replaceAll(path.sep,'/');
 const location=new URL(base+relative,'https://studio.test');
 const refs=[...html.matchAll(/\b(?:href|src|poster)\s*=\s*["']([^"']+)["']/g)].map(m=>m[1]);
 if(file.endsWith('.css')) refs.push(...[...html.matchAll(/url\(["']?([^\)"']+)["']?\)/g)].map(m=>m[1]));
 for(const m of html.matchAll(/\bsrcset=["']([^"']+)["']/g)) refs.push(...m[1].split(',').map(v=>v.trim().split(/\s+/)[0]));
 for(const ref of refs){
  if(/^(?:mailto:|tel:|data:|javascript:)/.test(ref))continue;
  const url=new URL(ref.replaceAll('&amp;','&'),location);
  if(url.origin!==location.origin)continue;
  checked++;
  if(!url.pathname.startsWith(base)){errors.push(`${relative}: outside base: ${ref}`);continue;}
  let target=path.join(root,decodeURIComponent(url.pathname.slice(base.length)));
  try{if((await stat(target)).isDirectory())target=path.join(target,'index.html');await stat(target);}catch{errors.push(`${relative}: missing ${ref}`);continue;}
  if(url.hash && target.endsWith('.html')){
   const content=await readFile(target,'utf8');
   const id=decodeURIComponent(url.hash.slice(1));
   if(!content.includes(`id="${id}"`)&&!content.includes(`id='${id}'`))errors.push(`${relative}: missing anchor ${ref}`);
  }
 }
}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`Checked ${checked} local references across ${pages.length} HTML/CSS files (base ${base}).`);
