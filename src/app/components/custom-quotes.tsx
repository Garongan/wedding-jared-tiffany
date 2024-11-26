import { Text } from "@chakra-ui/react";
import { FC } from "react";

export const CustomQuotes: FC<{ text: string; from: string }> = ({
  text,
  from,
}) => {
  return (
    <Text
      color='alternativeColorText'
      fontWeight='light'
      fontStyle='italic'
      maxWidth='800px'
      textTransform='none'
      letterSpacing='1px'
    >
      {text}
      <br />
      {from}
    </Text>
  );
};
