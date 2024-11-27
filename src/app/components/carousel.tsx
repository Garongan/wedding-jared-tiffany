import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, IconButton, Image } from '@chakra-ui/react';
import { useState, useEffect, FC } from 'react';

const images = [
  'img/Slideshow-Cover-1.webp',
  'img/Slideshow-Cover-2.webp',
  'img/Slideshow-Cover-3.webp',
  'img/Slideshow-Cover-4.webp',
  'img/Slideshow-Cover-5.webp',
];

export const Carousel: FC<{ width: string }> = ({ width }) => {
  const extendedImages = [images[images.length - 1], ...images, images[0]];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (currentIndex === 0) {
        setCurrentIndex(images.length);
      } else if (currentIndex === extendedImages.length - 1) {
        setCurrentIndex(1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, extendedImages.length]);

  return (
    <Box position='relative' width={width}>
      <Box
        display='flex'
        transition={isTransitioning ? 'transform 0.5s ease-in-out' : 'none'}
        transform={`translateX(calc(-${currentIndex} * 280px + 110px))`}
        width={`${extendedImages.length * 280}px`}
      >
        {extendedImages.map((src, index) => (
          <Image
            alt={index.toString()}
            objectFit='cover'
            src={src}
            key={index}
            height='390px'
            width='280px'
            borderWidth='10px'
            borderStyle='solid'
            borderColor='transparent'
            className={`${
              index === currentIndex ? 'scale-105' : 'scale-100'
            } transition-all duration-300`}
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
