import {
  Flex,
  useColorModeValue,
  Stack,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { Field, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';

const SignUp: NextPage = () => {
  const { t: y } = useTranslation('yup');
  const { t: c } = useTranslation('common');
  const { t } = useTranslation('signup');

  const SigninSchema = Yup.object().shape({
    name: Yup.string().required(y('required')),
    email: Yup.string().email(y('email')).required(y('required')),
    phone: Yup.string().phone('BR', y('phone')).required(y('required')),
    password: Yup.string()
      .min(8, y('number-min', { count: 8 }))
      .max(250, y('number-max', { count: 250 }))
      .minLowercase(1, y('password-min-lowercase', { count: 1 }))
      .minUppercase(1, y('password-min-uppercase', { count: 1 }))
      .minNumbers(1, y('password-min-numbers', { count: 1 }))
      .minSymbols(1, y('password-min-symbols', { count: 1 }))
      .required(y('required')),
    cpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], y('passwords-match'))
      .required(y('required')),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      cpassword: '',
    },
    validationSchema: SigninSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <Flex align={'center'} justify={'center'}>
          <Stack spacing={8} mx={'auto'} w={{ base: 'md', md: 'xl' }} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>{t('sign-up-title')}</Heading>
              <Text fontSize={'lg'} textAlign='center' color={useColorModeValue('gray.500', 'gray.400')}>
                {t('sign-up-subtitle')}
              </Text>
            </Stack>
            <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
              <Stack spacing={6}>
                <FormControl id='name' isInvalid={!!formik.errors.name && formik.touched.name}>
                  <FormLabel>{c('name')}</FormLabel>
                  <Field as={Input} name='name' type='name' />
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl id='email' isInvalid={!!formik.errors.email && formik.touched.email}>
                  <FormLabel>{c('email-address')}</FormLabel>
                  <Field as={Input} name='email' type='email' />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl id='phone' isInvalid={!!formik.errors.phone && formik.touched.phone}>
                  <FormLabel>{c('phone')}</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>+55</InputLeftAddon>
                    <Field as={Input} name='phone' type='tel' placeholder='54999998888' />
                  </InputGroup>
                  <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>
                <FormControl id='password' isInvalid={!!formik.errors.password && formik.touched.password}>
                  <FormLabel>{c('password')}</FormLabel>
                  <Field as={Input} name='password' type='password' />
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>
                <FormControl id='cpassword' isInvalid={!!formik.errors.cpassword && formik.touched.cpassword}>
                  <FormLabel>{t('cpassword')}</FormLabel>
                  <Field as={Input} name='cpassword' type='password' />
                  <FormErrorMessage>{formik.errors.cpassword}</FormErrorMessage>
                </FormControl>
                <Button colorScheme='teal' type='submit'>
                  {c('sign-in')}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  {t('already-a-user')}{' '}
                  <NextLink href={'/signin'}>
                    <Button
                      as={'a'}
                      cursor='pointer'
                      color={useColorModeValue('teal.500', 'teal.100')}
                      fontWeight={400}
                      variant={'link'}
                    >
                      {c('sign-in')}
                    </Button>
                  </NextLink>
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </FormikProvider>
  );
};

export default SignUp;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'signup', 'yup'])),
    },
  };
}
