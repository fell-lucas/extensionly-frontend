import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Badge,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

interface Props {
  imageUrl: string;
  name: string;
  social: string;
  description: string;
  tags: string[];
}

const SocialProfileWithImageHorizontal = ({ imageUrl, name, social, description, tags }: Props) => {
  return (
    <Center py={6}>
      <Stack
        borderRadius='lg'
        w={{ sm: 'sm', md: 'xl' }}
        direction={{ base: 'column', md: 'row' }}
        bg='brandHighlightBg'
        boxShadow={'lg'}
      >
        <Flex flex={1}>
          <Image
            borderLeftRadius='lg'
            borderRightRadius={{ sm: 'lg', md: 'none' }}
            borderBottomRightRadius={{ sm: 'none', md: 'none' }}
            borderBottomLeftRadius={{ sm: 'none', md: 'lg' }}
            borderWidth='1px'
            alt='Contributor picture'
            objectFit='cover'
            boxSize='sm'
            src={imageUrl}
          />
        </Flex>
        <Stack flex={1} flexDirection='column' justifyContent='start' alignItems='center' p={1} pt={2}>
          <Heading size={'sm'} as='h3'>
            {name}
          </Heading>
          <Link isExternal href={`https://github.com/${social}`} fontWeight={600} color={'gray.500'} size='sm'>
            @{social} <ExternalLinkIcon mx='1' />
          </Link>
          <Text textAlign={'center'} color={'text'} px={3} py={6}>
            {description}
          </Text>
          <Wrap align={'center'} justify={'center'} direction={'row'} pb={6}>
            {tags.map((tag) => (
              <WrapItem key={tag + name}>
                <Badge px={2} py={1} fontWeight={'400'}>
                  {tag}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </Stack>
    </Center>
  );
};

export default SocialProfileWithImageHorizontal;
