import { Box, Text } from "@chakra-ui/react";
import Control from "./HomePage/Control";

const HeadingText = () => {
  return (
    <div>
      <Box>
        <Text
          fontSize={{
            base: "2xl",
            sm: "3xl",
            md: "3xl",
            lg: "2xl",
            xl: "3xl",
            "2xl": "3xl",
          }}
          fontFamily="monospace"
          letterSpacing="-0.05em"
        >
          guest@portfolio:~$
        </Text>
        <Text
          fontSize={{
            base: "2xl",
            sm: "3xl",
            md: "3xl",
            lg: "2xl",
            xl: "3xl",
            "2xl": "3xl",
          }}
          color="red.300"
          fontFamily="monospace"
          letterSpacing="-0.05em"
        >
          Select an option:
        </Text>
      </Box>
    </div>
  );
};

export default HeadingText;
