import Menu from './components/Menu.js';
import Content from './components/Content.js';
import { ChakraProvider, theme} from '@chakra-ui/react'

function Main() {
  return (
    <ChakraProvider theme={theme}>
        <Menu />
        <Content />
    </ChakraProvider>
  );
}

export default Main;