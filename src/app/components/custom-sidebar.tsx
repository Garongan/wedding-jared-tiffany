'use client';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex, SlideFade, Stack, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { CustomButton } from './custom-button';
import { CustomHeading } from './custom-heading';
import { HeadingAlternative } from './heading-alternative';
import { Carousel } from './carousel';

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
  const targetMessage = useRef<HTMLDivElement>(null);

  const startSlideUp = () => {
    setIsLoad(true);
    audio?.play();
    setTimeout(() => {
      setIsLoad(false);
      setIsOpened(true);
      setIsSlideshowActive(true);
    }, 500);
  };

  const scrollToMessage = () => {
    if (targetMessage.current) {
      targetMessage.current.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      setIsLoad(true);
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
            <HeadingAlternative
              text='WEDDING ANNOUNCEMENT'
              color='alternativeColorText'
              fontSize='md'
            />
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
              fontWeight='light'
              color='alternativeColorText'
              lineHeight='1'
            />
            <CustomHeading
              text='#TImetoshaRE'
              fontSize='4xl'
              textTransform='none'
              fontStyle='italic'
              fontWeight='light'
              color='alternativeColorText'
              lineHeight='1'
            />
            <Box
              className='animate-moveUpDown'
              position='absolute'
              bottom='0'
              marginBottom='10vh'
            >
              <CustomButton
                text='Open'
                onClick={startSlideUp}
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
    <Box>
      <AnimatePresence>
        {!isOpened && (
          <Box
            as={motion.div}
            key='page1'
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, y: '-200vh' }}
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
          animate={{ y: '-100vh' }}
          transition='ease-out 0.5s'
          position='relative'
        >
          <Box height='100vh' width='500px'></Box>
          <Flex direction='column'>
            <Box
              overflow='hidden'
              height='100vh'
              width='500px'
              zIndex='10'
              backgroundColor='black'
            >
              <Box
                className='animate-scaleUpAndFade'
                background={`linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(${slideShowImages[currentSlideShowImage]}) center center / cover`}
                height='100%'
                width='500px'
              />
            </Box>
            <Box height='100vh' width='500px' position='absolute' zIndex='20'>
              <Stack padding='2rem' height='full'>
                <Box
                  display='flex'
                  marginTop='60px'
                  marginBottom='8px'
                  alignItems='center'
                  justifyContent='space-between'
                  flexDirection='column'
                >
                  <HeadingAlternative
                    text='WEDDING ANNOUNCEMENT'
                    color='alternativeColorText'
                    fontSize='md'
                  />
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
                    fontWeight='light'
                    color='alternativeColorText'
                    lineHeight='1'
                  />
                  <CustomHeading
                    text='#TImetoshaRE'
                    fontSize='4xl'
                    textTransform='none'
                    fontStyle='italic'
                    fontWeight='light'
                    color='alternativeColorText'
                    lineHeight='1'
                  />
                </Box>
                <Box display='flex' justifyContent='flex-end'>
                  <CustomButton
                    text='SCROLL TO BEGIN'
                    onClick={scrollToMessage}
                    isLoading={false}
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
            {/* message content */}
            <Flex
              direction='column'
              ref={targetMessage}
              alignItems='center'
            >
              <Box
                padding='50px 0 100px'
                display='flex'
                alignItems='center'
                flexDirection='column'
              >
                <HeadingAlternative
                  text='DEAR MR-MRS-MS,'
                  color='secondaryColorText'
                  fontSize='12px'
                />
                <HeadingAlternative
                  text='Family & Friends'
                  color='secondaryColorText'
                  fontSize='12px'
                />
                <SlideFade
                  in={isLoad}
                  offsetY='20px'
                  transition={{
                    enter: { duration: 0.5 },
                    exit: { duration: 0.5 },
                  }}
                >
                  <Box padding='24px 0' textAlign='center'>
                    <CustomHeading
                      fontSize='32px'
                      fontStyle='normal'
                      text='Welcome to<br>Tiffany &amp; Jared’s<br>Wedding Website'
                      textTransform='none'
                      fontWeight='medium'
                      lineHeight='1.2'
                      color='secondaryColorText'
                    />
                  </Box>
                </SlideFade>
                <SlideFade
                  in={isLoad}
                  offsetY='20px'
                  transition={{
                    enter: { duration: 0.8 },
                    exit: { duration: 0.5 },
                  }}
                >
                  <Text
                    textAlign='center'
                    fontSize='18px'
                    fontStyle='italic'
                    padding='0 10% 24px'
                    marginBottom='18px'
                  >
                    Together with joyful hearts and the grace of God, we
                    joyfully announce the upcoming of our marriage.
                  </Text>
                </SlideFade>
                <Carousel />
              </Box>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  );
};
