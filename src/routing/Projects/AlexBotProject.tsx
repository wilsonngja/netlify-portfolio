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
  Link,
  Stack,
  Tag,
  useColorMode,
  Text,
  Image,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import AlexBot from "../../assets/AlexBot.jpg";

const AlexBotProject = () => {
  const { colorMode } = useColorMode();
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
          <Image src={AlexBot} height="100%" width="100%" objectFit="cover" />
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
                  AlexBot Project{" "}
                  <Link
                    href="https://github.com/cg2111a-project/cg2111a-project/tree/main"
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
                  January 2022 - April 2022
                </Heading>
              </GridItem>

              <GridItem rowSpan={1} colSpan={1} paddingY={2}>
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
                  Raspberry Pi
                </Tag>
                <Tag
                  bgColor="orange.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  Hardware
                </Tag>
                <Tag
                  bgColor="orange.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  Bare Metal
                </Tag>
                <Tag bgColor="green.300" color="black" marginBottom={3}>
                  C++
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
              This project is done during a module: Engineering Principles and
              Practice II where the scope of project extends towards large-scale
              system. We are also allowed to play with components such as Lidar
              and SLAM. During the evaluation, we were tasks to map out a maze
              that was being mapped out. Although this project is of a higher
              complexity, I was glad to experience technologies such as ROS.
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Flex>
  );
};

export default AlexBotProject;
