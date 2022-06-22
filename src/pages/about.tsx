import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Grid, GridItem, Link } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SocialProfileWithImageHorizontal from '../components/about/social';

const About: NextPage = () => {
  const { t: c } = useTranslation('common');
  const { t } = useTranslation('about');

  return (
    <>
      <Container w='full' maxW='container.md'>
        <Prose>
          <h2>{c('aboutUs')}</h2>
          <h4>{c('a')} Extensionly</h4>
          <p>{t('p1')}</p>
          <h4>{t('whoarewe')}</h4>
          <p>
            {t('p2')}{' '}
            <Link isExternal href={'https://zallpy.com/en'}>
              Zallpy Digital <ExternalLinkIcon mx='2px' />
            </Link>
            .
          </p>
        </Prose>
      </Container>
      <Grid templateColumns={{ md: 'repeat(1, 1fr)', lg: 'repeat(2, 2fr)' }} gap={6}>
        <GridItem>
          <SocialProfileWithImageHorizontal
            imageUrl='https://avatars.githubusercontent.com/u/47724710?v=4'
            name='Lucas Fell'
            tags={[t('programming'), t('reading'), t('yerbamate'), 'jazz', 'star wars']}
            social={'fell-lucas'}
            description={t('descriptionLucas')}
          />
        </GridItem>
        <GridItem>
          <SocialProfileWithImageHorizontal
            imageUrl='https://avatars.githubusercontent.com/u/9628068?v=4'
            name='Igor Dalepiane'
            tags={[t('microservices'), t('programming'), 'gaming', 'netflix']}
            social={'igordalepiane'}
            description={t('descriptionIgor')}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default About;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'common', 'about'])),
    },
  };
}
