import { ui, defaultLang } from './ui';
export function useTranslations(lang: string | undefined) { return ui[(lang && lang in ui ? lang : defaultLang) as keyof typeof ui]; }
export function getLocalePaths() { return ['fr','es','de','ja'].map(locale => ({params:{locale}})); }
export function getRelativeLocaleUrl(locale: string, path: string = '/') {
  const root = import.meta.env.BASE_URL + 'apps/find-later/';
  let clean = path.startsWith(root) ? path.slice(root.length) : path.replace(/^\//, '');
  clean = clean.replace(/^(fr|es|de|ja)(\/|$)/, '');
  return root + (locale === 'en' ? '' : locale + '/') + clean;
}
export const getLocalizedPath = getRelativeLocaleUrl;
export function getLocalizedHashPath(locale: string, pathname: string, hash: string) {
 return getLocalizedPath(locale, pathname).replace(/\/?$/, '/') + (hash.startsWith('#') ? hash : '#' + hash);
}
