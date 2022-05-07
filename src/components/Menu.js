import {
  Button,
  Flex,
  Text
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Menu = () => {
  return (
    <Flex w='100%' justify='flex-end' align='center'>
      <Button size='lg' variant='ghost'>
        <Text fontSize='xl'>FAQ</Text>
      </Button>
    <ColorModeSwitcher/>
    </Flex>
  );
};

export default Menu;
