import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, IconButton, Image } from '@chakra-ui/react';
import { useState } from 'react';

const images = [
  'img/Slideshow-Cover-1.webp',
  'img/Slideshow-Cover-2.webp',
  'img/Slideshow-Cover-3.webp',
  'img/Slideshow-Cover-4.webp',
  'img/Slideshow-Cover-5.webp',
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box position='relative' width='500px'>
      <Box
        display='flex'
        transition='transform 0.5s ease-in-out'
        transform={`translateX(-${currentIndex * 280}px)`}
        width='500px'
      >
        {images.map((src, index) => (
          <Image
            alt={index.toString()}
            objectFit='cover'
            objectPosition='center'
            src={src}
            key={index}
            height='390px'
            width='280px'
            borderWidth='10px'
            borderStyle='solid'
            borderColor='transparent'
            className={`${index === currentIndex ? 'scale-105' : 'scale-100'} transition-all duration-300`}
          />
        ))}
      </Box>

      <IconButton
        aria-label='Previous Slide'
        icon={<ArrowBackIcon />}
        onClick={handlePrev}
        size='lg'
        variant='outline'
        position='absolute'
        height='30px'
        width='70px'
        right='120px'
        bottom='-50px'
        alignSelf='center'
        border='1px solid rgb(26, 27, 29)'
        backgroundColor='bgSecondary'
      />
      <IconButton
        aria-label='Next Slide'
        icon={<ArrowForwardIcon />}
        onClick={handleNext}
        size='lg'
        variant='outline'
        position='absolute'
        height='30px'
        width='70px'
        right='2.5rem'
        bottom='-50px'
        alignSelf='center'
        border='1px solid rgb(26, 27, 29)'
        backgroundColor='bgSecondary'
      />
    </Box>
  );
};
