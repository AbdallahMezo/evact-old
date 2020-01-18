import * as React from 'react';
import { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme/defaultTheme';
import { GlobalStyles } from 'theme/globalStyles';

const ThemeContext = createContext(defaultTheme);

export interface Theme {
  colors: {
    primary: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
  };
}

interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactChild;
}

function ThemeProvider(props: ThemeProviderProps) {
  const { theme, children } = props;
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export interface ThemeConsumerProps {
  children?: React.ReactChild;
  theme?: Theme;
}

function ThemeConsumer(props: ThemeConsumerProps) {
  const { children } = props;
  return (
    <ThemeContext.Consumer>
      {(theme: Theme) => (
        <StyledThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </StyledThemeProvider>
      )}
    </ThemeContext.Consumer>
  );
}

/**
 * @returns {Theme} theme
 */
const useThemeContext = (): Theme => useContext(ThemeContext);

export { ThemeProvider, ThemeConsumer, useThemeContext };
