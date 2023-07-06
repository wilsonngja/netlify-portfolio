import {
  Box,
  Center,
  Flex,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import MBotProject from "./MBotProject";
import AlexBotProject from "./AlexBotProject";
import MeetUps from "./MeetUps";
import PropertyRentalManager from "./PropertyRentalManager";
import BermudaRectangle from "./BermudaRectangle";

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
    <Box paddingX={isLargeScreen ? 2 : 10} paddingBottom={10}>
      <Center>
        <MBotProject />
      </Center>
      <Center marginTop={5}>
        <AlexBotProject />
      </Center>
      <Center marginTop={5}>
        <MeetUps />
      </Center>
      <Center marginTop={5}>
        <PropertyRentalManager />
      </Center>
      <Center marginTop={5}>
        <BermudaRectangle />
      </Center>
    </Box>
  );
};

export default ProjectList;
