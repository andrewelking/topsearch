import { Button, useBoolean, useColorModeValue } from '@chakra-ui/react';

const WebButton = ({ index, leftIcon, webName, toggleActiveLink }) => {
  const [active, setActive] = useBoolean();
  const bg = useColorModeValue('black', 'gray');
  const color = useColorModeValue('white', 'lightGray');

  const handleClick = (webName) => {
    setActive.toggle();
    toggleActiveLink(webName);
  };
  return (
    <Button
      bg={active ? bg : 'lightGray'}
      color={active ? color : 'black'}
      onClick={() => handleClick(webName)}
      _hover={{ backgroundColor: 'none' }}
      leftIcon={leftIcon}>
      {webName}
    </Button>
  );
};

export default WebButton;
