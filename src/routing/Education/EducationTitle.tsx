import { Box, Text, useColorMode } from "@chakra-ui/react";
import Typed from "react-typed";

const EducationTitle = () => {
  const { colorMode } = useColorMode();

  const EducationTitleColor = {
    dark: "#B794F4",
    light: "#773fd9",
  };

  const headingStyle: React.CSSProperties = {
    color: EducationTitleColor[colorMode],
    fontFamily: "monospace",
    fontWeight: "bold",
  };

  return (
    <Box display="flex" alignSelf="flex-start" paddingX={3} paddingBottom={5}>
      <Text
        fontSize={{
          base: "1.375rem",
          sm: "3xl",
          md: "3xl",
          lg: "3xl",
          xl: "3xl",
          "2xl": "4xl",
        }}
      >
        <Typed
          strings={["./wilson_ng/education"]}
          typeSpeed={50}
          style={headingStyle}
          cursorChar="_"
        />
      </Text>
    </Box>
  );
};

export default EducationTitle;
