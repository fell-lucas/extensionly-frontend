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
    </Head>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </ChakraProvider>
);
