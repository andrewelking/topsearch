import Logo from './Logo.js';
import SearchBox from './SearchBox.js';
import Advanced from './Advanced.js';
import { VStack } from '@chakra-ui/react';
import { useList } from 'react-use';
import MyContext from './MyContext.js';
import { useState } from 'react';

const Content = () => {
  const [list, { push, filter }] = useList([]);
  const [searchWeb, setSearchWeb] = useState('');

  return (
    <MyContext.Provider
      value={{
        list: list,
        push: push,
        filter: filter,
        searchWeb: searchWeb,
        setSearchWeb: setSearchWeb,
      }}>
      <VStack align='center' spacing='30px'>
        <Logo />
        <SearchBox />
        <Advanced />
      </VStack>
    </MyContext.Provider>
  );
};

export default Content;
