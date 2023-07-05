import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import mBot from "../../assets/mBot.jpg";

const MBotProject = () => {
  //   const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");
  const { colorMode } = useColorMode();

  //   const isLargeScreen = useBreakpointValue({
  //     base: false,
  //     sm: false,
  //     md: false,
  //     lg: true,
  //     xl: true,
  //     "2xl": true,
  //   });

  const HeadingText = {
    dark: "teal.300",
    light: "blue.500",
  };

  const DescriptionText = {
    dark: "purple.100",
    light: "purple.800",
  };

  const DateText = {
    dark: "pink.200",
    light: "green.600",
  };

  return (
    <Flex alignItems="center" justify="center" minHeight="100%">
      <Card
        overflow="hidden"
        variant="outline"
        size="lg"
        maxW={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "80%",
          "2xl": "80%",
        }}
        direction={{ base: "column", sm: "column", md: "row" }}
        borderWidth="1px"
      >
        <Box>
          <Image
            src={mBot}
            alt="Card Image"
            height="100%"
            width="100%"
            objectFit="cover"
          />
        </Box>
        <Stack>
          <CardBody justifyItems="center" alignItems="center">
            <Heading
              size={{
                base: "md",
                sm: "xl",
                md: "md",
                lg: "lg",
                xl: "lg",
                "2xl": "xl",
              }}
              color={HeadingText[colorMode]}
              fontFamily="monospace"
            >
              mBot Robot Project
            </Heading>
            <Heading
              size={{
                base: "sm",
                sm: "lg",
                md: "sm",
                lg: "md",
                xl: "md",
                "2xl": "lg",
              }}
              color={DateText[colorMode]}
              fontFamily="monospace"
              paddingBottom={3}
            >
              August 2021 - November 2021
            </Heading>
            <Divider />
            <Text
              py="2"
              fontFamily="monospace"
              fontSize={{
                base: "xs",
                sm: "md",
                md: "0.8rem",
                lg: "xs",
                xl: "0.925rem",
                "2xl": "md",
              }}
              color={DescriptionText[colorMode]}
              paddingTop={3}
            >
              A project done as part of the curriculum in the module of CG1111A:
              Engineering Principles and Practice I. This module teaches the
              fundamentals of engineering knowledge and provides ample
              opportunity for circuit building and debugging. It has also allow
              me to play with interesting sensors such as the ultrasonic and
              colour sensor. At the end of this project, the robot was put to
              test on a maze to navigate based on the different coloured tiles.
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Flex>
  );
};

export default MBotProject;
