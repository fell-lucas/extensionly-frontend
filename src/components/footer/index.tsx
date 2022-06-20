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
      <Container as={Stack} maxW={'6xl'} py={10}>
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
              {t('publicAnalytics')} <ExternalLinkIcon mx='2px' />
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('company')}</ListHeader>
            <NextLink href={'/about'}>
              <Link>{c('aboutUs')}</Link>
            </NextLink>
            <Link isExternal href={'https://github.com/Dalepfell/extensionly-frontend'}>
              {t('openSource')} <ExternalLinkIcon mx='2px' />
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('legal')}</ListHeader>
            <Link href={'#'}>{t('cookiesPolicy')}</Link>
            <Link href={'#'}>{t('privacyPolicy')}</Link>
            <Link href={'#'}>{t('serviceTerms')}</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('followUs')}</ListHeader>
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
