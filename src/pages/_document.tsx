import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <body>
        <ColorModeScript initialColorMode='system' />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
