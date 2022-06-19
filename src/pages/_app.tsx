import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import { appWithTranslation } from 'next-i18next';
import NextNProgress from 'nextjs-progressbar';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <NextNProgress
      stopDelayMs={0}
      startPosition={0}
      showOnShallow={false}
      color='#4fd1c5'
      options={{ showSpinner: false }}
    />
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(MyApp);
