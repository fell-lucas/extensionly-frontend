import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Container, Link, SimpleGrid, Stack, Text, Flex, Tag } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import NextLink from 'next/link';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const { t } = useTranslation('footer');
  const { t: c } = useTranslation('common');
  const router = useRouter();

  const toggleLocale = (locale: 'pt-BR' | 'en') => {
    router.push(router.asPath, undefined, { locale, scroll: false });
  };

  return (
    <>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 3, md: 5 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>{t('product')}</ListHeader>
            <Link href={'#'}>{t('overview')}</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>{t('features')}</Link>
              <Tag size={'sm'} bg={'brandGreen'} ml={2} color={'white'}>
                {c('new')}
              </Tag>
            </Stack>
            <Link href={'#'}>{t('tutorials')}</Link>
            <Link isExternal href={'https://plausible.extensionly.app/extensionly.app'}>
              {t('public-analytics')} <ExternalLinkIcon mx='2px' />
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('company')}</ListHeader>
            <Link as={NextLink} href={'/about'}>
              {c('about-us')}
            </Link>
            <Link isExternal href={'https://github.com/Dalepfell/extensionly-frontend'}>
              {t('open-source')} <ExternalLinkIcon mx='2px' />
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('legal')}</ListHeader>
            <Link isExternal href={'https://www.privacypolicies.com/live/bc7abf6f-0dda-4fdd-b771-990d343fc3a0'}>
              {t('cookies-policy')} <ExternalLinkIcon mx='2px' />
            </Link>
            <Link isExternal href={'https://www.privacypolicies.com/live/4a9e0e1b-9515-4987-8b7a-de0316c0b09a'}>
              {t('privacy-policy')}
              <ExternalLinkIcon mx='2px' />
            </Link>
            <Link
              isExternal
              href={'https://www.termsandconditionsgenerator.com/live.php?token=Ob89qlaVSUUa8FhUBBCsJ5uYczADSFKG'}
            >
              {t('service-terms')} <ExternalLinkIcon mx='2px' />
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('follow-us')}</ListHeader>
            <Link isExternal href={'https://github.com/Dalepfell'}>
              GitHub <ExternalLinkIcon mx='2px' />
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('language')}</ListHeader>
            <Link onClick={() => toggleLocale('pt-BR')}>Português</Link>
            <Link onClick={() => toggleLocale('en')}>English</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Flex
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: 'brandGrayBorder',
          flexGrow: 1,
        }}
      ></Flex>
      <Text py={6} fontSize={'sm'} textAlign={'center'}>
        {t('reserved')}
      </Text>
    </>
  );
};

export default Footer;
