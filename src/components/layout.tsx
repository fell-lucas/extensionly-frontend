import { FC, ReactNode } from 'react';
import Navbar from './navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from './footer';
import Script from 'next/script';
import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = extendTheme(
    {
      fonts: {
        heading: `'Montserrat', sans-serif`,
        body: `'Montserrat', sans-serif`,
      },
    },
    withProse()
  );

  return (
    <ChakraProvider theme={theme}>
      <Script
        defer
        data-domain='extensionly.vercel.app'
        src='https://extensionly-analytics.fell.codes/js/plausible.js'
      ></Script>
      <Head>
        <title>Extensionly</title>
        <meta name='description' content='Extensionly app' />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ChakraProvider>
  );
};
