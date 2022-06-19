import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const theme = extendTheme(
    {
      initialColorMode: 'system',
      useSystemColorMode: true,
      fonts: {
        heading: `'Montserrat', sans-serif`,
        body: `'Montserrat', sans-serif`,
      },
      semanticTokens: {
        colors: {
          brandGrayBorder: {
            default: 'gray.200',
            _dark: 'gray.700',
          },
          brandGreen: {
            default: 'green.300',
            _dark: 'green.800',
          },
        },
      },
    },
    withProse()
  );

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
