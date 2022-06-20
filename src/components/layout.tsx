import { PropsWithChildren } from 'react';
import Navbar from './navbar';
import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from './footer';
import Script from 'next/script';
import { ThemeProvider } from './theme';

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider>
      <Script
        defer
        data-domain='extensionly.app'
        src='https://plausible.extensionly.app/js/plausible.js'
      ></Script>
      <Head>
        <title>Extensionly</title>
        <meta name='description' content='Extensionly app' />
      </Head>
      <Navbar />
      <Container as='main' py={3} maxW='container.xl' centerContent>
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
