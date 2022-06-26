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
  InputRightElement,
} from '@chakra-ui/react';
import { Field, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { useTranslation } from 'next-i18next';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

YupPassword(Yup);

const SignIn: NextPage = () => {
  const { t: y } = useTranslation('yup');
  const { t: c } = useTranslation('common');
  const { t } = useTranslation('signin');

  const [showPassword, setShowPassword] = useState(false);

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email(y('email')).required(y('required')),
    password: Yup.string()
      .min(8, y('number-min', { count: 8 }))
      .max(250, y('number-max', { count: 250 }))
      .minLowercase(1, y('password-min-lowercase', { count: 1 }))
      .minUppercase(1, y('password-min-uppercase', { count: 1 }))
      .minNumbers(1, y('password-min-numbers', { count: 1 }))
      .minSymbols(1, y('password-min-symbols', { count: 1 }))
      .required(y('required')),
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
          <Stack spacing={8} mx={'auto'} w={{ base: 'md', md: 'xl' }} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>{t('sign-in-title')}</Heading>
              <Text fontSize={'lg'} textAlign='center' color={useColorModeValue('gray.500', 'gray.400')}>
                {t('sign-in-subtitle')}
              </Text>
            </Stack>
            <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
              <Stack spacing={6}>
                <FormControl id='email' isInvalid={!!formik.errors.email && formik.touched.email}>
                  <FormLabel>{c('email-address')}</FormLabel>
                  <Field as={Input} name='email' type='email' />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl id='password' isInvalid={!!formik.errors.password && formik.touched.password}>
                  <FormLabel>{c('password')}</FormLabel>
                  <InputGroup>
                    <Field as={Input} name='password' type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>
                <Button colorScheme='teal' type='submit'>
                  {c('sign-in')}
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
      ...(await serverSideTranslations(locale, ['common', 'signin', 'yup'])),
    },
  };
}
