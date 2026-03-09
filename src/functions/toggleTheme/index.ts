const DARK_ATTR = 'sv-theme';
const DARK_VAL = 'dark';

/** Returns true if the page is currently in dark mode */
const isDark = (): boolean => document.body.getAttribute(DARK_ATTR) === DARK_VAL;

/**
 * Force a specific theme.
 * @param theme 'dark' | 'light'
 */
const setTheme = (theme: 'dark' | 'light'): 'dark' | 'light' => {
  document.body.classList.add('sv-remove-transition');

  if (theme === 'dark') {
    document.body.setAttribute(DARK_ATTR, DARK_VAL);
  } else {
    document.body.removeAttribute(DARK_ATTR);
  }

  setTimeout(() => {
    document.body.classList.remove('sv-remove-transition');
  }, 100);

  return theme;
};

/**
 * Toggle between dark and light themes.
 * Returns the new active theme.
 */
const toggleTheme = (): 'dark' | 'light' => setTheme(isDark() ? 'light' : 'dark');

export { toggleTheme, setTheme };
