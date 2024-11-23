'use client';

import theme from '@/app/theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
