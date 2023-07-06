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
import { BsGithub, BsYoutube } from "react-icons/bs";
import MeetUpsImage from "../../assets/MeetUps.png";

const MeetUps = () => {
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
          <Image
            src={MeetUpsImage}
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
                  Project: MeetUps{" "}
                  <Link href="https://github.com/wilsonngja/MeetUps" isExternal>
                    <Icon
                      as={BsGithub}
                      boxSize="22px"
                      _hover={{ color: GitHubHoverColor[colorMode] }}
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=b-SdLAV9xOE&ab_channel=WilsonNg"
                    isExternal
                    marginLeft={3}
                  >
                    <Icon
                      as={BsYoutube}
                      boxSize="22px"
                      _hover={{ color: "#c4302b" }}
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
                  May 2022 - July 2022
                </Heading>
              </GridItem>

              <GridItem rowSpan={1} colSpan={1} paddingY={2}>
                <Tag
                  bgColor="cyan.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  Javascript
                </Tag>
                <Tag
                  bgColor="cyan.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  HTML
                </Tag>
                <Tag
                  bgColor="cyan.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  CSS
                </Tag>
                <Tag
                  bgColor="cyan.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  Svelte
                </Tag>
                <Tag
                  bgColor="pink.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  MongoDB
                </Tag>
                <Tag bgColor="purple.300" color="black" marginBottom={3}>
                  TailwindCSS
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
              This utility project was done during the summer vacation in 2022.
              As a pair, my partner and I developed this web application to
              allow NUS students to fit their timetable to find a common
              timeslot in the timetable. I played the role of a fullstack
              developer in this project and assisted in developing backend
              server as well as the development of frontend utility. With the
              data acquired from NUSModsAPI, we are able to retrieve the modules
              details for comparison. Eventually, more features such as venue
              searching and availabilty were also added. This project helped us
              tremendously towards software engineering.
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Flex>
  );
};

export default MeetUps;
