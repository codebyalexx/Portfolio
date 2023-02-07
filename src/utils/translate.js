import fr from '../translations/fr.json';
import en from '../translations/en.json';

/**
 * Define the current language in the local storage
 * @param language {String} The target language code
 */
export function defineCurrentLanguage(language) {
  localStorage.setItem('custom_language', language);
}

/**
 * Get the current user language
 * @return {string} Returns the current user language
 */
export function getCurrentLanguage() {
  return localStorage.getItem('custom_language') || navigator.language.split('-')[0] || 'en';
}

/**
 * Translate a string to the user's current language
 * @param str {String||TranslationResolvable} The content to translate
 */
export default function translate(str) {
  /* It's retrieving the user language from the browser */
  const userLanguage = getCurrentLanguage();

  /* It's selecting the good json depending on the user language */
  const currentJson = userLanguage === 'fr' ? fr : en;

  /* It's returning the translation and logging if null */
  // eslint-disable-next-line no-console
  if (!currentJson[str]) console.error('Missing translation for: ', str);
  return currentJson[str] || str;
}
