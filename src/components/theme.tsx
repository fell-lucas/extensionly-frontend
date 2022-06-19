import { extendTheme, ThemeConfig, ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

export type UseThemeProps = {
  resolvedTheme?: 'light' | 'dark';
  setTheme: (theme: string) => void;
};

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { resolvedTheme } = useNextTheme() as UseThemeProps;
  const colorModeConfig: ThemeConfig = {
    initialColorMode: resolvedTheme,
    useSystemColorMode: true,
  };
  const theme = extendTheme(
    { ...colorModeConfig },
    {
      fonts: {
        heading: `'Montserrat', sans-serif`,
        body: `'Montserrat', sans-serif`,
      },
    },
    withProse()
  );

  return (
    <NextThemeProvider attribute='class' enableSystem defaultTheme='system'>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </NextThemeProvider>
  );
};
