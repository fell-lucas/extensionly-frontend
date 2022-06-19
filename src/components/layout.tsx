import { FC, ReactNode } from 'react';
import Navbar from './navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from './footer';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <ChakraProvider>
    <Head>
      <title>Extensionly</title>
      <meta name='description' content='Extensionly app' />
      <script
        defer
        data-domain='extensionly.vercel.app'
        src='https://extensionly-analytics.fell.codes/js/plausible.js'
      ></script>
    </Head>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </ChakraProvider>
);
