import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Tag,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import mBot from "../../assets/mBot.jpg";
import { BsGithub } from "react-icons/bs";

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

  const GitHubHoverColor = {
    dark: "white",
    light: "gray.800",
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
          xl: "90%",
          "2xl": "90%",
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
            <Grid templateColumns="repeat(1, 1fr)">
              <GridItem colSpan={1} rowSpan={1}>
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
                  mBot Robot Project{" "}
                  <Link
                    href="https://github.com/cg1111a-gr7/mbot/tree/main"
                    isExternal
                  >
                    <Icon
                      as={BsGithub}
                      boxSize="22px"
                      _hover={{ color: GitHubHoverColor[colorMode] }}
                    />
                  </Link>
                </Heading>
              </GridItem>

              <GridItem colSpan={1} rowSpan={1}>
                <Heading
                  size={{
                    base: "sm",
                    sm: "lg",
                    md: "sm",
                    lg: "md",
                    xl: "md",
                    "2xl": "md",
                  }}
                  color={DateText[colorMode]}
                  fontFamily="monospace"
                >
                  August 2021 - November 2021
                </Heading>
              </GridItem>

              <GridItem
                rowSpan={1}
                colSpan={1}
                paddingY={2}
                justifyItems="left"
              >
                <Tag
                  bgColor="orange.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  Arduino
                </Tag>
                <Tag
                  bgColor="orange.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  Hardware
                </Tag>
                <Tag bgColor="orange.300" color="black" marginBottom={3}>
                  Bare Metal
                </Tag>
              </GridItem>
            </Grid>

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
