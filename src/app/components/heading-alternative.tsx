import { Text } from '@chakra-ui/react';
import { FC } from 'react';

export const HeadingAlternative: FC<{ text: string, color: string, fontSize: string }> = ({ text, color, fontSize }) => {
  return (
    <Text
      fontSize={fontSize}
      fontWeight='bold'
      fontFamily='headingAlternative'
      color={color}
      letterSpacing='2px'
    >
      {text}
    </Text>
  );
};
