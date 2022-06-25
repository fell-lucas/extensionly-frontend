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
} from '@chakra-ui/react';
import { Field, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);
import { useTranslation } from 'next-i18next';

const SignIn: NextPage = () => {
  const { t } = useTranslation('yup');

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email(t('email')).required(t('required')),
    password: Yup.string()
      .min(8, t('number-min', { count: 8 }))
      .max(250, t('number-max', { count: 250 }))
      .minLowercase(1, t('password-min-lowercase', { count: 1 }))
      .minUppercase(1, t('password-min-uppercase', { count: 1 }))
      .minNumbers(1, t('password-min-numbers', { count: 1 }))
      .minSymbols(1, t('password-min-symbols', { count: 1 }))
      .required(t('required')),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign in to your account</Heading>
              <Text fontSize={'lg'} color={useColorModeValue('gray.500', 'gray.400')}>
                to enjoy all of our cool features.
              </Text>
            </Stack>
            <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
              <Stack spacing={6}>
                <FormControl id='email' isInvalid={!!formik.errors.email && formik.touched.email}>
                  <FormLabel>Email address</FormLabel>
                  <Field as={Input} name='email' type='email' />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl id='password' isInvalid={!!formik.errors.password && formik.touched.password}>
                  <FormLabel>Password</FormLabel>
                  <Field as={Input} name='password' type='password' />
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>
                <Button colorScheme='teal' type='submit'>
                  Sign in
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </FormikProvider>
  );
};

export default SignIn;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'common', 'signin', 'yup'])),
    },
  };
}
