import { Theme } from '../types/theme';

export const THEME_STORAGE_KEY = 'daskit-theme';
export const REDUX_THEME_STORAGE_KEY = 'daskit-redux-theme';

export const saveThemeToLocalStorage = (theme: Theme, key: string) => {
  try {
    localStorage.setItem(key, theme);
  } catch (error) {
    console.error('Failed to save theme to localStorage:', error);
  }
};

export const getThemeFromLocalStorage = (key: string): Theme => {
  try {
    const theme = localStorage.getItem(key) as Theme;
    return theme === 'dark' || theme === 'light' ? theme : 'light';
  } catch (error) {
    console.error('Failed to get theme from localStorage:', error);
    return 'light';
  }
};