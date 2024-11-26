'use client'

import { Box, Flex, Stack, SlideFade } from "@chakra-ui/react";
import { CustomHeading } from "./components/custom-heading";
import { HeadingAlternative } from "./components/heading-alternative";
import { CustomQuotes } from "./components/custom-quotes";
import { CustomButton } from "./components/custom-button";
import { useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  document.onreadystatechange = () => {
    setIsLoaded(document.readyState === "complete");
}

  return (
    <Flex height='100%' width='100%'>
      <Box
        width='calc(100% - 500px)'
        display={{ base: "block" }}
        background={
          "linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(img/Desktop.webp) center center / cover"
        }
        borderRightWidth='8px'
        borderRightStyle='solid'
        borderRightColor='blackAlpha.400'
      >
        <Stack padding='42px' height='full'>
          <SlideFade in={isLoaded} offsetY='20px'>
            <HeadingAlternative text='WEDDING ANNOUNCEMENT' />
          </SlideFade>
          <Box
            paddingTop='32px'
            color='#fefefe'
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
            <Box marginTop='10px'>
              <CustomQuotes
                text='"Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada."'
                from='— Sapardi Djoko Damono'
              />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box
        background={
          "linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(img/Cover.webp) center center / cover"
        }
        width='500px'
      >
        <Stack padding='2rem' height='full'>
          <Box
            display='flex'
            marginTop='60px'
            marginBottom='8px'
            alignItems='center'
            justifyContent='space-between'
            flexDirection='column'
          >
            <HeadingAlternative text='WEDDING ANNOUNCEMENT' />
          </Box>
          <Box
            position='relative'
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            height='calc(90% - 130px)'
          >
            <CustomHeading
              text='TIFFANY & JARED'
              fontSize='4xl'
              textTransform='uppercase'
              fontStyle='normal'
            />
            <CustomHeading
              text='#TImetoshaRE'
              fontSize='4xl'
              textTransform='none'
              fontStyle='italic'
            />
            <Box position='absolute' bottom='0' marginBottom='10vh'>
              <CustomButton text='Open' />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}
