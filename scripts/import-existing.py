from pathlib import Path
import shutil, json
root=Path.cwd(); parent=root.parent
src=parent/'Pouch3 Website'
dst=root/'src/products/find-later'
if dst.exists():
    raise SystemExit('Bootstrap import already completed. Edit the local product copies; do not overwrite them.')
shutil.copytree(src/'src',dst,dirs_exist_ok=True)
shutil.copytree(src/'public',root/'public/apps/find-later',dirs_exist_ok=True,ignore=shutil.ignore_patterns('CNAME','robots.txt','.DS_Store'))
for f in dst.rglob('*.astro'):
    s=f.read_text()
    s=s.replace('Astro.currentLocale',"(Astro.url.pathname.match(/\\/find-later\\/(fr|es|de|ja)(?:\\/|$)/)?.[1] ?? 'en')")
    s=s.replace('import.meta.env.BASE_URL',"(import.meta.env.BASE_URL + 'apps/find-later/')")
    if "from 'astro:i18n'" in s:
        rel='../i18n/utils' if f.parent.name=='components' else '../../i18n/utils'
        s=s.replace("from 'astro:i18n'",f"from '{rel}'")
    f.write_text(s)
(dst/'i18n/utils.ts').write_text('''import { ui, defaultLang } from './ui';
export function useTranslations(lang: string | undefined) { return ui[(lang && lang in ui ? lang : defaultLang) as keyof typeof ui]; }
export function getLocalePaths() { return ['fr','es','de','ja'].map(locale => ({params:{locale}})); }
export function getRelativeLocaleUrl(locale: string, path: string = '/') {
  const root = import.meta.env.BASE_URL + 'apps/find-later/';
  let clean = path.startsWith(root) ? path.slice(root.length) : path.replace(/^\\//, '');
  clean = clean.replace(/^(fr|es|de|ja)(\\/|$)/, '');
  return root + (locale === 'en' ? '' : locale + '/') + clean;
}
export const getLocalizedPath = getRelativeLocaleUrl;
export function getLocalizedHashPath(locale: string, pathname: string, hash: string) {
 return getLocalizedPath(locale, pathname).replace(/\\/?$/, '/') + (hash.startsWith('#') ? hash : '#' + hash);
}
''')
# Route wrappers retain the imported components and translations.
for locale in ['', '[locale]']:
    folder=root/'src/pages/apps/find-later'/locale; folder.mkdir(parents=True,exist_ok=True)
    prefix='../../../../' if locale else '../../../'
    for page in ['Index','Support','Privacy','Terms']:
        name=page.lower()
        extra=f"import {{ getLocalePaths }} from '{prefix}products/find-later/i18n/utils';\nexport function getStaticPaths() {{ return getLocalePaths(); }}\n" if locale else ''
        (folder/f'{name}.astro').write_text(f"---\nimport Page from '{prefix}products/find-later/components/pages/{page}Page.astro';\n{extra}---\n<Page />\n")
# A quiet shared escape hatch inside the existing app header.
f=dst/'components/Header.astro';s=f.read_text()
s=s.replace('    <a href={getRelativeLocaleUrl', '''    <a class="studio-return" href={import.meta.env.BASE_URL} aria-label="Sansom Studio — all apps">All apps</a>
    <a href={getRelativeLocaleUrl''',1)
s += '''\n<style> .studio-return { font: 500 13px/1.2 system-ui,sans-serif; color: inherit; opacity:.8; margin-right:16px; padding:12px 0; white-space:nowrap; border-bottom:1px solid currentColor; } .studio-return:hover {opacity:1;} .studio-return:focus-visible{outline:2px solid #8f86ff;outline-offset:4px;} #site-header nav {margin-left:auto;} @media(max-width:480px){.header-wordmark{display:none}.studio-return{font-size:12px;margin-right:12px;} #site-header>div{padding-inline:16px;} } </style>\n'''
f.write_text(s)
# Static pages preserve the original DOM, styling, scripts and image paths.
for slug,source in [('mythcraft','mythcraft-website'),('your-jobs','Job Search App Landing Page')]:
    source=parent/source; target=root/'public/apps'/slug
    for part in (['assets','css','js','index.html','privacy','support'] if slug=='mythcraft' else ['images','fonts','css','js','index.html','privacy','support','terms']):
        a=source/part;b=target/part
        b.parent.mkdir(parents=True,exist_ok=True)
        if a.is_dir():shutil.copytree(a,b,dirs_exist_ok=True,ignore=shutil.ignore_patterns('.DS_Store'))
        elif a.exists():shutil.copy2(a,b)
    for f in target.rglob('*.html'):
        s=f.read_text(); depth=len(f.relative_to(target).parents)-1
        back='../'*(depth+2)
        link=f'<a class="studio-return" href="{back}" aria-label="Sansom Studio — all apps">All apps</a>'
        if slug=='mythcraft':s=s.replace('<div class="nav-inner">','<div class="nav-inner">'+link,1)
        else:s=s.replace('<a class="brand"',link+'<a class="brand"',1)
        if 'class="studio-return"' not in s:
            s=s.replace('<body>','<body>'+link,1)
        s=s.replace('</head>','<meta name="robots" content="noindex,nofollow" /><style>.studio-return{font:500 13px/1.2 system-ui,sans-serif!important;color:inherit!important;white-space:nowrap;padding:12px 0;border-bottom:1px solid currentColor;margin-right:12px}.studio-return:focus-visible{outline:2px solid #8f86ff;outline-offset:4px}@media(max-width:600px){.nav-logo span{display:none}.nav-inner{gap:10px!important}}</style></head>')
        f.write_text(s)
# Studio-owned copies of supplied assets.
assets={
'find-later-icon.png':parent/'Pouch3 Website/public/images/icon-192.png',
'find-later-scene.webp':parent/'Pouch3 Website/public/images/device-bookmarks-dark.webp',
'soleil-icon.png':parent/'Sunkind Website 5/public/images/icon-192.png',
'soleil-screen.webp':parent/'Sunkind Website 5/public/images/app/your-day.webp',
'jobs-icon.png':parent/'Job Search App Landing Page/images/icon-192.png',
'jobs-screen.webp':parent/'Job Search App Landing Page/images/app/01-jobs.webp',
'mythcraft-icon.png':parent/'mythcraft-website/assets/art/app-icon.png',
'mythcraft-scene.jpg':parent/'mythcraft-website/assets/art/hero-wide.jpg',
'instrument.woff2':parent/'Job Search App Landing Page/fonts/instrument-latin.woff2',
}
for name,path in assets.items():shutil.copy2(path,root/'public/studio'/name)
p=json.loads((root/'package.json').read_text());p['name']='sansom-studio';p['scripts']['check:links']='node scripts/check-links.mjs';p['scripts']['build']='astro build';(root/'package.json').write_text(json.dumps(p,indent=2)+'\n')
lock=json.loads((root/'package-lock.json').read_text());lock['name']='sansom-studio';lock['packages']['']['name']='sansom-studio';(root/'package-lock.json').write_text(json.dumps(lock,indent=2)+'\n')
print('Imported existing sources and original assets into App Website.')
