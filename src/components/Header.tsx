
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import React from 'react';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const AppName = styled.h1`
  font-size: 20px;
  margin: 0;
`;

const Select = styled.select`
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  outline: none;
`;

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as any); 
  };

  return (
    <HeaderWrapper>
      <AppName>🌈 Multi Theme App</AppName>
      <Select value={theme} onChange={handleThemeChange}>
        <option value="theme1">Theme 1 - Minimal</option>
        <option value="theme2">Theme 2 - Dark Sidebar</option>
        <option value="theme3">Theme 3 - Colorful Cards</option>
      </Select>
    </HeaderWrapper>
  );
};

export default Header;
