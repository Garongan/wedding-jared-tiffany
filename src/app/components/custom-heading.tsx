import { Heading } from "@chakra-ui/react";
import { FC } from "react";

export const CustomHeading: FC<{
  text: string;
  fontSize: string;
  textTransform: "capitalize" | "uppercase" | "lowercase" | "none";
  fontStyle: string;
}> = ({ text, fontSize, textTransform, fontStyle }) => {
  return (
    <Heading
      as='h2'
      lineHeight='1'
      fontFamily='heading'
      fontWeight='light'
      color='alternativeColorText'
      fontSize={fontSize}
      textTransform={textTransform}
      fontStyle={fontStyle}
    >
      {text}
    </Heading>
  );
};
