import { Box, Text } from "@chakra-ui/react";

const HeadingText = () => {
  return (
    <div>
      <Box>
        <Text fontSize={["lg", "2xl", "3xl", "3xl"]}>guest@portfolio:~$</Text>
        <Text fontSize={["lg", "2xl", "3xl", "3xl"]} color="red.300">
          Select an option:
        </Text>
      </Box>
    </div>
  );
};

export default HeadingText;
