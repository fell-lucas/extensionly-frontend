import { Container, useColorMode } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NotFoundPt from '~/assets/not-found-pt.svg';
import NotFoundEn from '~/assets/not-found-en.svg';
import NotFoundPtDark from '~/assets/not-found-pt-dark.svg';
import NotFoundEnDark from '~/assets/not-found-en-dark.svg';
import { useRouter } from 'next/router';

const NotFoundLogo = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  if (router.locale === 'en') {
    if (colorMode === 'light') {
      return <NotFoundEn />;
    }
    return <NotFoundEnDark />;
  } else if (colorMode === 'light') {
    return <NotFoundPt />;
  }
  return <NotFoundPtDark />;
};

const NotFound: NextPage = () => {
  return (
    <Container maxW='container.sm'>
      <NotFoundLogo />
    </Container>
  );
};

export default NotFound;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'common'])),
    },
  };
}
