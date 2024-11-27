import { Button } from '@chakra-ui/react';
import { FC, MouseEventHandler, ReactElement } from 'react';

export const CustomButton: FC<{
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isLoading: boolean;
  rightIcon: ReactElement;
  fontFamily: string;
  fontStyle: string;
  backgroundColor: string;
  color: string;
  padding: string
}> = ({ text, onClick, isLoading, rightIcon, fontFamily, fontStyle, backgroundColor, color, padding }) => {
  return (
    <Button
      backgroundColor={backgroundColor}
      size='md'
      padding={padding}
      color={color}
      fontFamily={fontFamily}
      fontSize='lg'
      fontWeight='normal'
      fontStyle={fontStyle}
      onClick={onClick}
      isLoading={isLoading}
      rightIcon={rightIcon ?? null}
    >
      {text}
    </Button>
  );
};
