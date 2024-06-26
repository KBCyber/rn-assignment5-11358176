import React, { createContext, useState } from 'react';

const lightTheme = {
  background: '#fff',
  text: '#333',
  subText: '#666',
  cardBackground: '#fff',
  logoBackground: '#f0f0f0',
  buttonBackground: '#f0f0f0',
  iconColor: '#000',
  iconColor2: '#f4f4f4',
  iconColor3: '#1e1e2d',
  border: '#ddd',
  primary: '#6200ee',
  bluet: '0063f8',
  lbars: '#123e83',
  mbars: '#25253d',
  sbars: '#25253d',
};

const darkTheme = {
  background: '#161622',
  text: '#fff',
  subText: '#aaa',
  profileText: '#7e848d',
  cardBackground: '#444',
  logoBackground: '#1e1e2d',
  buttonBackground: '#1e1e2d',
  iconColor: '#fff',
  button: '#000',
  iconColor2: '#1e1e2d',
  iconColor3: '#ffffff',
  border: '#222',
  primary: '#fff',
  bluet: '#0063f8',
  lbars: '#123e83',
  mbars: '#fff',
  sbars: '#fff',
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};