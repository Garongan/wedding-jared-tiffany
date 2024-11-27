import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [
  'img/Slideshow-Cover-1.webp',
  'img/Slideshow-Cover-2.webp',
  'img/Slideshow-Cover-3.webp',
  'img/Slideshow-Cover-4.webp',
  'img/Slideshow-Cover-5.webp',
];

export const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      position='relative'
      width='500px'
      height='100vh'
      overflow='visible'
    >
      <AnimatePresence>
        {images.map(
          (src, index) =>
            index === currentImageIndex && (
              <Box
                as={motion.div}
                key={src}
                initial={{ scale: 1, opacity: 0.9 }}
                animate={{ scale: 1.1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0.8 }}
                transition='linear 1.5s'
                style={{
                //   position: 'absolute',
                //   top: 0,
                //   left: 0,
                  width: '500px',
                  height: '100%',
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            )
        )}
      </AnimatePresence>
    </Box>
  );
};
