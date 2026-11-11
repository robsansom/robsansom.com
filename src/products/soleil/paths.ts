/** Paths inside the copied Soleil experience, including Pages subdirectories. */
export function productPath(path: string = '/') {
  const root = import.meta.env.BASE_URL + 'apps/soleil/';
  const local = path.startsWith(root) ? path : root + path.replace(/^\//, '');
  const [, pathname, suffix] = local.match(/^([^?#]*)(.*)$/s)!;
  const isAsset = /\.[^/]+$/.test(pathname);
  return pathname + (!isAsset && !pathname.endsWith('/') ? '/' : '') + suffix;
}
export function localizeHtml(html: string) {
  return html.replace(/href="(\/(?!\/)[^"]*)"/g, (_, path) => `href="${productPath(path)}"`);
}
