import {
  useBreakpointValue,
  useMediaQuery,
  useColorMode,
  Box,
  Text,
} from "@chakra-ui/react";

import React from "react";
import Typed from "react-typed";

const ProjectTitle = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: false,
    "2xl": false,
  });

  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");

  const { colorMode } = useColorMode();

  const WorkTitle = {
    dark: "#B794F4",
    light: "#773fd9",
  };

  const headingStyle: React.CSSProperties = {
    color: WorkTitle[colorMode],
    fontFamily: "monospace",
    fontWeight: "bold",
  };

  return (
    <Box
      display="flex"
      alignSelf="flex-start"
      paddingX={isLargeScreen ? 2 : 10}
      paddingBottom={5}
    >
      <Text
        fontSize={
          isVerySmallScreen
            ? "1.175rem"
            : {
                base: "1.5rem",
                sm: "3xl",
                md: "3xl",
                lg: "3xl",
                xl: "3xl",
                "2xl": "4xl",
              }
        }
      >
        <Typed
          strings={["./wilson_ng/projects"]}
          typeSpeed={50}
          style={headingStyle}
          cursorChar="_"
        />
      </Text>
    </Box>
  );
};

export default ProjectTitle;
