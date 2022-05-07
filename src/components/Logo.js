import lightLogo from '../assets/images/logo-light.png';
import darkLogo from '../assets/images/logo-dark.png';
import { Image, useColorModeValue } from '@chakra-ui/react';

const Logo = () => {
  const logo = useColorModeValue(lightLogo, darkLogo);
  return <Image src={logo} alt='topSearch' />;
};

export default Logo;
