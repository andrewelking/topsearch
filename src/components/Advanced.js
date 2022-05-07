import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import TabsContainer from './TabsContainer.js';

const Advanced = (toggleActiveLink) => {
  return (
    <Accordion allowToggle w='50%'>
      <AccordionItem>
        <h2>
          <AccordionButton _focus={{ outline: 'none' }}>
            <Box flex='1' textAlign='left'>
              Filter search engine
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <TabsContainer toggleActiveLink={toggleActiveLink}/>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Advanced;
