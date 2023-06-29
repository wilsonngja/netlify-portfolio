import { Box, Text } from "@chakra-ui/react";
import Typed from "react-typed";

interface TitleProps {
  title: string;
}

const EducationTitle: React.FC<TitleProps> = ({ title }) => {
  const headingStyle: React.CSSProperties = {
    color: "#B794F4",
    fontFamily: "monospace",
    fontWeight: "bold",
  };

  if (title != null) {
    return (
      <Box display="flex" alignSelf="flex-start">
        <Text fontSize="2xl">
          <Typed
            strings={[title]}
            typeSpeed={50}
            style={headingStyle}
            cursorChar="|"
          />
          {title}
        </Text>
      </Box>
    );
  }
  return <Text>Education</Text>;
};

export default EducationTitle;
