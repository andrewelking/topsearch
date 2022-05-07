import { useState } from 'react';
import {
  Center,
  IconButton,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  useBoolean,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { MdFormatQuote } from 'react-icons/md';
import MyContext from './MyContext.js';
import { useContext } from 'react';

const SearchBox = () => {
  const myCtx = useContext(MyContext);

  const [toggle, setToggle] = useBoolean();

  const [value, setValue] = useState('');

  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    let defaultURL = myCtx.searchWeb

    if (defaultURL !== '' && defaultURL !== 'https://google.com/search?q=') {
      defaultURL += value;
      window.open(defaultURL);
    } else if (
      defaultURL === 'https://google.com/search?q=' ||
      defaultURL === ''
    ) {
      let defaultURL = `https://google.com/search?q=${
        toggle ? `"${value}"` : value
      }`;
      if (myCtx.list.length > 0) {
        myCtx.list.forEach((link, i) => {
          defaultURL += `${i > 0 ? ' OR+' : ''} site%3A${link}`;
        });
        window.open(defaultURL);
      } else {
        window.open(defaultURL);
      }
    }
    setValue('');
  };

  return (
    <Center w='50%' as='form' onSubmit={handleSubmit}>
      <InputGroup size='lg'>
        <InputLeftElement children={<Search2Icon />} />
        <Input
          placeholder='What are you looking for?'
          borderRadius='30px'
          border='2px solid'
          value={value}
          onChange={handleChange}
        />
        <InputRightElement
          children={
            <IconButton
              icon={<MdFormatQuote />}
              variant='ghost'
              colorScheme={toggle ? 'red' : 'blue'}
              onClick={setToggle.toggle}
              _hover={{ color: 'none' }}
              _focus={{ outline: 'none' }}
            />
          }
          mr='10px'
        />
      </InputGroup>
    </Center>
  );
};

export default SearchBox;
