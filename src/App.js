import React from 'react'
import { Tab, TabList, TabPanel, TabPanels, Tabs, Box , HStack} from '@chakra-ui/react';
import Generate from './Generate';
import Scan from './Scan';

const App = () => {
  
  return (
    <>
      <Box
        width="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgColor="blue.200"
        minWidth='230px'
        padding='0 10px'
      >
        <HStack
          width="500px"
          bg="white"
          borderRadius="10px"
          boxShadow="base"
          p="4px"
        >
          <Tabs variant="soft-rounded" colorScheme="blue" width="100%">
            <TabList>
              <Tab width="50%" >
                Generate
              </Tab>
              <Tab width="50%" > Scan</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Generate />
              </TabPanel>
              <TabPanel>
                <Scan />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </HStack>
      </Box>
    </>
  );
}

export default App