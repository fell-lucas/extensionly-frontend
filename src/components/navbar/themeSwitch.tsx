import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'md',
      }}
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeSwitch;
