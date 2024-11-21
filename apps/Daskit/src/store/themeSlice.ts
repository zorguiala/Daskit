import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../types/theme';
import { getThemeFromLocalStorage, saveThemeToLocalStorage, REDUX_THEME_STORAGE_KEY } from '../utils/theme';

interface ThemeState {
  mode: Theme;
}

const initialState: ThemeState = {
  mode: getThemeFromLocalStorage(REDUX_THEME_STORAGE_KEY),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      saveThemeToLocalStorage(state.mode, REDUX_THEME_STORAGE_KEY);
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload;
      saveThemeToLocalStorage(state.mode, REDUX_THEME_STORAGE_KEY);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;