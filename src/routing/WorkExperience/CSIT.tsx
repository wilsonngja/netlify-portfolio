import {
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import CSITInternshipPic from "../../assets/CSITInternship.jpg";
import CSITInternshipTags from "./CSITInternshipTags";

const CSIT = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    "2xl": true,
  });

  const { colorMode } = useColorMode();
  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");

  const HeadingText = {
    dark: "teal.300",
    light: "blue.500",
  };

  const DateText = {
    dark: "pink.200",
    light: "green.600",
  };

  const DescriptionText = {
    dark: "purple.100",
    light: "purple.800",
  };

  const TagText = {
    dark: "blue.200",
    light: "blue.700",
  };

  return (
    <>
      <Flex flex="1" borderRadius="md" paddingBottom={10}>
        <Card maxW={isLargeScreen ? "xs" : "sm"}>
          <CardBody>
            <Image src={CSITInternshipPic} borderRadius="lg" />
            <Stack marginTop={6} spacing={3}>
              <Heading
                fontSize={
                  isLargeScreen ? "lg" : isVerySmallScreen ? "0.85rem" : "xl"
                }
                color={HeadingText[colorMode]}
                fontFamily="monospace"
              >
                Software Engineer Intern @ CSIT
              </Heading>
              <Heading
                fontSize={
                  isLargeScreen ? "sm" : isVerySmallScreen ? "0.8rem" : "md"
                }
                textTransform="uppercase"
                color={DateText[colorMode]}
                fontFamily="monospace"
              >
                March 2019 - June 2019
              </Heading>
              {isLargeScreen && (
                <>
                  <Divider />
                  <Text
                    color={DescriptionText[colorMode]}
                    fontFamily="monospace"
                    fontSize="0.95rem"
                    letterSpacing="-0.005rem"
                  >
                    An internship done after graduating from polytechnic while
                    waiting for enlistmnet. This internship is done as a
                    fulfilment of a CSIT Diploma Scholar which develops the
                    skils in Python, Web Scrapping and Data Cleaning.
                  </Text>
                </>
              )}
            </Stack>
            <Divider paddingY={2} />
            <HStack paddingTop={4}>
              <Text
                color={TagText[colorMode]}
                fontFamily="monospace"
                fontSize="0.95rem"
                letterSpacing="-0.005rem"
              >
                Tags:
              </Text>
              <CSITInternshipTags />
            </HStack>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default CSIT;
