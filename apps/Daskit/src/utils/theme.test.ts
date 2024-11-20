import { describe, it, expect, beforeEach } from 'vitest';
import { saveThemeToLocalStorage, getThemeFromLocalStorage } from './theme';

describe('Theme Utils', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save theme to localStorage', () => {
    const key = 'test-theme';
    saveThemeToLocalStorage('dark', key);
    expect(localStorage.getItem(key)).toBe('dark');
  });

  it('should get theme from localStorage', () => {
    const key = 'test-theme';
    localStorage.setItem(key, 'dark');
    expect(getThemeFromLocalStorage(key)).toBe('dark');
  });

  it('should return light theme as default', () => {
    expect(getThemeFromLocalStorage('non-existent')).toBe('light');
  });
});