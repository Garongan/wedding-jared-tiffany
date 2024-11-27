'use client';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Stack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CustomButton } from './custom-button';
import { CustomHeading } from './custom-heading';
import { HeadingAlternative } from './heading-alternative';

const slideShowImages = [
  'img/Slideshow-Cover-1.webp',
  'img/Slideshow-Cover-2.webp',
  'img/Slideshow-Cover-3.webp',
  'img/Slideshow-Cover-4.webp',
  'img/Slideshow-Cover-5.webp',
];

export const CustomSidebar = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [currentSlideShowImage, setCurrentSlideShowImage] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const startScroll = () => {
    setIsLoad(true);
    audio?.play();
    setTimeout(() => {
      setIsLoad(false);
      setIsOpened(true);
      setIsSlideshowActive(true);
    }, 500);
  };

  useEffect(() => {
    setAudio(new Audio('/sound/bg-sound.mp3'));
    let interval: NodeJS.Timeout;
    if (isSlideshowActive) {
      interval = setInterval(() => {
        setCurrentSlideShowImage(
          (prevIndex) => (prevIndex + 1) % slideShowImages.length
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isSlideshowActive]);

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
              className='animate-moveUpDown'
              position='absolute'
              bottom='0'
              marginBottom='10vh'
            >
              <CustomButton
                text='Open'
                onClick={startScroll}
                isLoading={isLoad}
                rightIcon={<div></div>}
                fontFamily='body'
                fontStyle='italic'
                backgroundColor='bgSecondary'
                color='secondaryColorText'
                padding='0 2.4rem'
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
        <Box
          as={motion.div}
          key='page2'
          initial={{ y: '100%' }}
          animate={{ y: '-100%' }}
          transition='ease-out 0.5s'
          position='absolute'
          width='500px'
          height='200%'
        >
          <Box height='100%' width='500px'></Box>
          <Stack>
            <Box
              overflow='hidden'
              height='50%'
              width='500px'
              position='absolute'
              zIndex='10'
              backgroundColor='black'
            >
              <Box
                className='animate-scaleUpAndFade'
                background={`linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(${slideShowImages[currentSlideShowImage]}) center center / cover`}
                height='100%'
                width='500px'
              ></Box>
            </Box>
            <Box height='50%' width='500px' position='absolute' zIndex='20'>
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
                </Box>
                <Box display='flex' justifyContent='flex-end'>
                  <CustomButton
                    text='SCROLL TO BEGIN'
                    onClick={startScroll}
                    isLoading={isLoad}
                    rightIcon={<ChevronDownIcon />}
                    fontFamily='headingAlternative'
                    fontStyle='normal'
                    backgroundColor='transparent'
                    color='alternativeColorText'
                    padding='0'
                  />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      )}
    </div>
  );
};
