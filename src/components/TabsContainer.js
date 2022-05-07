import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  RadioGroup,
  Radio,
  HStack,
} from '@chakra-ui/react';
import {
  FaCode,
  FaBook,
  FaMusic,
  FaReddit,
  FaQuora,
  FaStackExchange,
  FaCodepen,
} from 'react-icons/fa';
import { ImStackoverflow } from 'react-icons/im';
import { MdLocalMovies } from 'react-icons/md';
import ButtonContainer from './ButtonContainer.js';
import WebButton from './WebButton.js';
import MyContext from './MyContext.js';
import { useContext, useState } from 'react';

const TabsContainer = () => {
  console.log('something');
  const myCtx = useContext(MyContext);

  const toggleActiveLink = (webName) => {
    let link =
      webName.toLowerCase() + `${webName === 'CodePen' ? '.io' : '.com'}`;
    if (myCtx.list.includes(link)) {
      myCtx.filter((web) => web !== link);
    } else {
      myCtx.push(link);
    }
  };

  const [tabIndex, setTabIndex] = useState(0);

  const [musicSearch, setMusicSearch] = useState('all');
  const [movieSearch, setMovieSearch] = useState('tv');
  // let musicWeb = `https://www.allmusic.com/search/${musicSearch}/`;
  // let movieWeb = `https://www.themoviedb.org/search/tv?query=${movieSearch}`

  const getMusicWebURL = (value) => `https://www.allmusic.com/search/${value}/`;
  const getMovieWebURL = (value) =>
    `https://www.themoviedb.org/search/tv?query=${value}`;

  const handleTabsChange = (index) => {
    setTabIndex(index);
    if (index === 1) {
      myCtx.setSearchWeb(
        'https://dictionary.cambridge.org/vi/dictionary/english/'
      );
    } else if (index === 2) {
      myCtx.setSearchWeb(getMusicWebURL('all'));
    } else if (index === 3) {
      myCtx.setSearchWeb(getMovieWebURL('tv'));
    }
  };

  const handleRadioChange = (value) => {
    if (tabIndex === 2) {
      setMusicSearch(value);
      myCtx.setSearchWeb(getMusicWebURL(value));
    } else if (tabIndex === 3) {
      setMovieSearch(value);
      myCtx.setSearchWeb(getMovieWebURL(value));
    }
  };

  return (
    <Tabs
      align='center'
      variant='enclosed'
      size='lg'
      isFitted
      value={tabIndex}
      onChange={(index) => handleTabsChange(index)}>
      <TabList>
        <Tab>
          <FaCode />
        </Tab>
        <Tab>
          <FaBook />
        </Tab>
        <Tab>
          <FaMusic />
        </Tab>
        <Tab>
          <MdLocalMovies />
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ButtonContainer>
            <WebButton
              leftIcon={<FaReddit />}
              webName='Reddit'
              toggleActiveLink={toggleActiveLink}></WebButton>
            <WebButton
              leftIcon={<FaQuora />}
              webName='Quora'
              toggleActiveLink={toggleActiveLink}></WebButton>
            <WebButton
              leftIcon={<ImStackoverflow />}
              webName='StackOverflow'
              toggleActiveLink={toggleActiveLink}></WebButton>
            <WebButton
              leftIcon={<FaStackExchange />}
              webName='StackExchange'
              toggleActiveLink={toggleActiveLink}></WebButton>
            <WebButton
              leftIcon={<FaCodepen />}
              webName='CodePen'
              toggleActiveLink={toggleActiveLink}></WebButton>
          </ButtonContainer>
        </TabPanel>
        <TabPanel>
          <RadioGroup onChange={myCtx.setSearchWeb} value={myCtx.searchWeb}>
            <HStack justify='center' spacing='60px'>
              <Radio value='https://dictionary.cambridge.org/vi/dictionary/english/'>
                Cambridge Dictionary
              </Radio>
              <Radio value='https://www.oxfordlearnersdictionaries.com/definition/english/'>
                Oxford Dictionary
              </Radio>
              <Radio value='https://www.urbandictionary.com/define.php?term='>
                Urban Dictionary
              </Radio>
            </HStack>
          </RadioGroup>
        </TabPanel>
        <TabPanel>
          <RadioGroup
            onChange={(value) => handleRadioChange(value)}
            value={musicSearch}>
            <HStack justify='center' spacing='60px'>
              <Radio value='all'>All</Radio>
              <Radio value='artists'>Artists</Radio>
              <Radio value='albums'>Albums</Radio>
              <Radio value='songs'>Songs</Radio>
            </HStack>
          </RadioGroup>
        </TabPanel>
        <TabPanel>
          <RadioGroup
            onChange={(value) => handleRadioChange(value)}
            value={movieSearch}>
            <HStack justify='center' spacing='60px'>
              <Radio value='tv'>TV Shows</Radio>
              <Radio value='movie'>Movies</Radio>
            </HStack>
          </RadioGroup>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsContainer;
