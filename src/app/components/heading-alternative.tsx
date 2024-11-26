import { Text } from "@chakra-ui/react";
import { FC } from "react";

export const HeadingAlternative: FC<{ text: string }> = ({ text }) => {
  return (
    <Text
      fontSize='md'
      fontWeight='bold'
      fontFamily='headingAlternative'
      color='#fefefe'
      letterSpacing='2px'
    >
      {text}
    </Text>
  );
};
