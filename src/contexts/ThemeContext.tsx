import React, { createContext, useContext, useEffect, useState } from 'react';


export type ThemeType = 'theme1' | 'theme2' | 'theme3';


interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>('theme1');


  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') as ThemeType;
    if (savedTheme) setThemeState(savedTheme);
  }, []);


  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
