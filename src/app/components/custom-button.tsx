import { Button } from '@chakra-ui/react';
import { FC, MouseEventHandler } from 'react';

export const CustomButton: FC<{
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isLoading: boolean;
}> = ({ text, onClick, isLoading }) => {
  return (
    <Button
      backgroundColor='bgSecondary'
      size='md'
      variant='solid'
      padding='0 2.4rem'
      color='secondaryColorText'
      fontFamily='body'
      fontSize='lg'
      fontWeight='normal'
      fontStyle='italic'
      onClick={onClick}
      isLoading={isLoading}
    >
      {text}
    </Button>
  );
};
