
import React, { PropsWithChildren, useContext } from 'react';
import { ThemeContext } from '@/components/providers/ThemeProvider';
import Header from './Header/Header';
import * as Style from './index.styled';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const context = useContext(ThemeContext);

  // Проверяем, есть ли контекст и определено ли свойство switchTheme
  if (!context || !context.switchTheme) {
    throw new Error('Theme context is not available');
  }

  return (
    <Style.App>
      <Style.Content>
        {/* Передаем свойства theme и switchTheme, если они есть в контексте */}
        <Header switchTheme={context.switchTheme} theme={context.theme}></Header>
        {children}
      </Style.Content>
    </Style.App>
  );
};
