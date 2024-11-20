import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { toggleTheme } from '../store/themeSlice';
import type { RootState } from '../store/store';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const reduxTheme = useSelector((state: RootState) => state.theme.mode);
  const { theme: contextTheme, toggleTheme: toggleContextTheme } = useTheme();

  // Apply Redux theme to document element
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(reduxTheme);
  }, [reduxTheme]);

  const handleReduxThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Daskit</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Context Theme Toggle */}
            <button
              onClick={toggleContextTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle theme (Context)"
            >
              {contextTheme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>

            {/* Redux Theme Toggle */}
            <button
              onClick={handleReduxThemeToggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle theme (Redux)"
            >
              {reduxTheme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;