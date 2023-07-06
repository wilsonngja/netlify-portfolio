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
import BermudaRectangeImage from "../../assets/BermudaRectangleImage.jpg";

const BermudaRectangle = () => {
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
            src={BermudaRectangeImage}
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
                  Bermuda Rectangle{" "}
                  <Link
                    href="https://github.com/AY2223-CG2271-Team-2/bermuda-rectangle"
                    isExternal
                  >
                    <Icon
                      as={BsGithub}
                      boxSize="22px"
                      _hover={{ color: GitHubHoverColor[colorMode] }}
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=CFpxFveyUfI&ab_channel=WilsonNg"
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
                  January 2023 - April 2023
                </Heading>
              </GridItem>

              <GridItem rowSpan={1} colSpan={1} paddingY={2}>
                <Tag
                  bgColor="orange.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  Bare Metal
                </Tag>

                <Tag
                  bgColor="orange.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  RTOS
                </Tag>

                <Tag bgColor="orange.300" color="black" marginBottom={3}>
                  Hardware
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
              This project is a robot built with the skillset acquire from the
              Real Time Operating System (CG2271) module. These skillset
              includes in depth knowledge towards, Mutex, Semaphores and also
              Message Queues. The robot was entitled "Bermuda Rectangle" as an
              inside joke in the team due to the circuit failing to work after
              putting through a rectangular hole. In all, this project has been
              an enriching one.
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Flex>
  );
};

export default BermudaRectangle;
