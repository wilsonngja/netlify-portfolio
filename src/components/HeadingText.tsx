import { HStack, Text } from "@chakra-ui/react";

const HeadingText = () => {
  return (
    <div>
      <HStack>
        <Text fontSize={["xl", "2xl", "3xl", "3xl"]}>guest@portfolio:~$</Text>
        <Text fontSize={["xl", "2xl", "3xl", "3xl"]} color="red.300">
          Select an option:
        </Text>
      </HStack>
    </div>
  );
};

export default HeadingText;
