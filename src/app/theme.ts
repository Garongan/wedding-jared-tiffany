import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";

export const theme = extendTheme({
    colors: {
        alternativeColorText: '#FEFEFE',
        secondaryColorText: '#1A1B1D',
        bgSecondary: '#F9F7F4',
    },
    fonts: {
        heading: fonts.butler.style.fontFamily,
        headingAlternative: fonts.poppins.style.fontFamily,
        body: fonts.newsReader.style.fontFamily,
    },
});