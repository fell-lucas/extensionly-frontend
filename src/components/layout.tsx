import { FC, ReactNode } from 'react';
import Navbar from './navbar';
import { ChakraProvider, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from './footer';
import Script from 'next/script';
import { ThemeProvider } from './theme';

export const Layout: FC<{ children: ReactNode; cookies: string }> = ({ cookies, children }) => {
  return (
    <ThemeProvider>
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
      <Container as='main' py={12} maxW='container.xl' centerContent>
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
