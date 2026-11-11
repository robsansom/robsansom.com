import { en } from './translations/en';
import { fr } from './translations/fr';
import { es } from './translations/es';
import { de } from './translations/de';
import { ja } from './translations/ja';

export const languages = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  ja: '日本語',
} as const;

export type Locale = keyof typeof languages;

export const defaultLang: Locale = 'en';

export const ui = { en, fr, es, de, ja };
