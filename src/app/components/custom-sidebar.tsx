'use client';

import { Box, Stack, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { CustomButton } from './custom-button';
import { CustomHeading } from './custom-heading';
import { HeadingAlternative } from './heading-alternative';

export const CustomSidebar = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const music = new Audio('/sound/bg-sound.mp3');

  const startScroll = () => {
    setIsLoad(true);
    setTimeout(() => {
      music.play();
      setIsLoad(false);
      setIsOpened(true);
    }, 500);
  };

  const LandingContent = () => {
    return (
      <Box
        background={
          'linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(img/Cover.webp) center center / cover'
        }
        width='500px'
        height='100%'
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
            <Box
              className='animate-wiggle'
              position='absolute'
              bottom='0'
              marginBottom='10vh'
            >
              <CustomButton
                text='Open'
                onClick={startScroll}
                isLoading={isLoad}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    );
  };

  return (
    <div>
      <AnimatePresence>
        {!isOpened && (
          <Box
            as={motion.div}
            key='page1'
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, y: '-100%' }}
            transition='linear 0.5s'
            position='fixed'
            width='500px'
            height='100%'
          >
            <LandingContent />
          </Box>
        )}
      </AnimatePresence>

      {isOpened && (
        <Stack direction='column'>
          <Box
            as={motion.div}
            key='page2'
            initial={{ y: '100%' }}
            animate={{ y: '-100%' }}
            transition='ease-out 0.5s'
            position='fixed'
            width='500px'
            height='200%'
          >
            <Box height='100%' width='500px'></Box>
            <Box
              background={
                'linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(img/Slideshow-Cover-1.webp) center center / cover'
              }
              height='50%'
              width='500px'
            ></Box>
          </Box>
        </Stack>
      )}
    </div>
  );
};
