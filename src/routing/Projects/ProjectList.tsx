import { Box, Center, useBreakpointValue } from "@chakra-ui/react";
import AlexBotProject from "./AlexBotProject";
import BermudaRectangle from "./BermudaRectangle";
import MBotProject from "./MBotProject";
import MeetUps from "./MeetUps";
import PropertyRentalManager from "./PropertyRentalManager";

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
