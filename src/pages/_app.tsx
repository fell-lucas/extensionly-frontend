import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(MyApp);
