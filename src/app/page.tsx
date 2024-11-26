'use client';

import { Box, Flex, SlideFade, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CustomHeading } from './components/custom-heading';
import { CustomQuotes } from './components/custom-quotes';
import { CustomSidebar } from './components/custom-sidebar';
import { HeadingAlternative } from './components/heading-alternative';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Flex height='100%' width='100%'>
      <Box
        width='calc(100% - 500px)'
        display={{ base: 'block' }}
        background={
          'linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(img/Desktop.webp) center center / cover'
        }
        borderRightWidth='8px'
        borderRightStyle='solid'
        borderRightColor='blackAlpha.400'
      >
        <Stack padding='42px' height='full'>
          <SlideFade
            in={isLoaded}
            offsetY='20px'
            transition={{ enter: { duration: 0.5 }, exit: { duration: 0.5 } }}
          >
            <HeadingAlternative text='WEDDING ANNOUNCEMENT' />
          </SlideFade>
          <Box
            paddingTop='32px'
            color='alternativeColorText'
            textTransform='uppercase'
            letterSpacing='4px'
          >
            <CustomHeading
              text='TIFFANY &'
              fontSize='7xl'
              textTransform='uppercase'
              fontStyle='normal'
            />
            <CustomHeading
              text='JARED'
              fontSize='7xl'
              textTransform='uppercase'
              fontStyle='normal'
            />
          </Box>
          <SlideFade
            in={isLoaded}
            offsetY='30px'
            transition={{ enter: { duration: 0.8 }, exit: { duration: 0.5 } }}
          >
            <Box marginTop='10px'>
              <CustomQuotes
                text='"Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada."'
                from='— Sapardi Djoko Damono'
              />
            </Box>
          </SlideFade>
        </Stack>
      </Box>
      <Box width='500px'>
        <CustomSidebar />
      </Box>
    </Flex>
  );
}
