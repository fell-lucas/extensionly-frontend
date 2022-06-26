import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Grid, GridItem, Link } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SocialProfileWithImageHorizontal from '../components/about/social';
import igorPic from '~/assets/igor.jpg';
import lucasPic from '~/assets/lucas.jpg';
import bernardinoPic from '~/assets/bernardino.jpg';

const About: NextPage = () => {
  const { t: c } = useTranslation('common');
  const { t } = useTranslation('about');

  return (
    <>
      <Container w='full' maxW='container.md'>
        <Prose>
          <h2>{c('about-us')}</h2>
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
      <Grid templateColumns='repeat(1, 1fr)'>
        <GridItem>
          <SocialProfileWithImageHorizontal
            imageUrl={lucasPic}
            name='Lucas Fell'
            tags={[t('programming'), t('reading'), t('yerbamate'), 'jazz', 'star wars']}
            social={'fell-lucas'}
            description={t('description-lucas')}
          />
        </GridItem>
        <GridItem>
          <SocialProfileWithImageHorizontal
            imageUrl={igorPic}
            name='Igor Dalepiane'
            tags={[t('microservices'), t('programming'), 'gaming', 'netflix']}
            social={'igordalepiane'}
            description={t('description-igor')}
          />
        </GridItem>
        <GridItem>
          <SocialProfileWithImageHorizontal
            imageUrl={bernardinoPic}
            name='Maicon Bernardino'
            tags={[t('teaching'), t('software-engineering'), t('cooking'), t('cats')]}
            social={'bernardino@unipampa.edu.br'}
            description={t('description-bernardino')}
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
      ...(await serverSideTranslations(locale, ['common', 'about'])),
    },
  };
}
