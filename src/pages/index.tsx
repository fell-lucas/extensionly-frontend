import { CheckIcon } from '@chakra-ui/icons';
import { Container, Stack, Heading, Button, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Landing from '~/assets/landing-page.svg';
import LandingDark from '~/assets/landing-page-dark.svg';

const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  };
});

const Home: NextPage = () => {
  const { t } = useTranslation('home');
  const { colorMode } = useColorMode();

  return (
    <Container maxW={'6xl'}>
      <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
          {t('title-1')}{' '}
          <Text as={'span'} color={useColorModeValue('teal.500', 'teal.200')}>
            {t('title-2')}
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          {t('subtitle')}
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button rounded={'full'} px={6} colorScheme={'teal'}>
            {t('get-started')}
          </Button>
          <Button rounded={'full'} px={6}>
            {t('learn-more')}
          </Button>
        </Stack>
      </Stack>

      {colorMode === 'light' ? <Landing /> : <LandingDark />}

      {/* <Box p={4} pt={20}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Text color={'gray.600'} fontSize={'xl'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </Text>
        </Stack>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box> */}
    </Container>
  );
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}
