import { Heading } from '@chakra-ui/react';
import { FC } from 'react';

export const CustomHeading: FC<{
  text: string;
  fontSize: string;
  fontWeight:
    | 'normal'
    | 'medium'
    | 'black'
    | 'thin'
    | 'hairline'
    | 'light'
    | 'semibold'
    | 'extrabold';
  textTransform: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  fontStyle: string;
  color: string;
  lineHeight: string
}> = ({ text, fontSize, textTransform, fontStyle, fontWeight, color,lineHeight }) => {
  return (
    <Heading
      as='h2'
      lineHeight={lineHeight}
      fontFamily='heading'
      fontWeight={fontWeight}
      color={color}
      fontSize={fontSize}
      textTransform={textTransform}
      fontStyle={fontStyle}
      dangerouslySetInnerHTML={{ __html: text }}
    >
    </Heading>
  );
};
