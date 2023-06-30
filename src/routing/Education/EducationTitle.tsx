import { Box, Text } from "@chakra-ui/react";
import Typed from "react-typed";

const EducationTitle = () => {
  const headingStyle: React.CSSProperties = {
    color: "#B794F4",
    fontFamily: "monospace",
    fontWeight: "bold",
  };

  return (
    <Box display="flex" alignSelf="flex-start">
      <Text fontSize="4xl">
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
