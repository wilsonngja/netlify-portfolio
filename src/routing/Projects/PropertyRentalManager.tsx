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
import { BsGithub } from "react-icons/bs";
import PropertyRentalManagerImage from "../../assets/PropertyRentalManagerPhoto.jpg";

const PropertyRentalManager = () => {
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
            src={PropertyRentalManagerImage}
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
                  Property Rental Manager{" "}
                  <Link
                    href="https://github.com/AY2223S1-CS2113-F11-1/tp"
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
                  August 2022 - November 2022
                </Heading>
              </GridItem>

              <GridItem rowSpan={1} colSpan={1} paddingY={2}>
                <Tag
                  bgColor="green.300"
                  color="black"
                  marginRight={4}
                  marginBottom={3}
                >
                  Java
                </Tag>

                <Tag bgColor="purple.300" color="black" marginBottom={3}>
                  Git
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
              This project was done in a team of 5 as a Software Engineering
              module (CS2113). Through this project, our understanding towards
              SWE were enhanced. Our project was a CLI based application that
              allows property managers to manage the lease of rooms. Therefore,
              with added features such as Room Types and Tenants list, the job
              of property managers is simplified.
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Flex>
  );
};

export default PropertyRentalManager;
