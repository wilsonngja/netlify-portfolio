import {
  Box,
  Center,
  Flex,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import MBotProject from "./MBotProject";

const ProjectList = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: false,
    "2xl": false,
  });

  return (
    <Box paddingX={isLargeScreen ? 2 : 10}>
      <Center>
        <MBotProject />
      </Center>
      <Flex paddingX={isLargeScreen ? 2 : 10}>
        <GridItem justifyItems="center"></GridItem>
      </Flex>
    </Box>
  );
};

export default ProjectList;
