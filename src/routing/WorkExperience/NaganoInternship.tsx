import {
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import NaganoInternshipPic from "../../assets/NaganoInternshipPicture.jpg";

const NaganoInternship = () => {
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

  return (
    <Flex flex="1" borderRadius="md" paddingBottom={10}>
      <Card maxW={isLargeScreen ? "xs" : "sm"}>
        <CardBody>
          <Image src={NaganoInternshipPic} borderRadius="lg" />
          <Stack marginTop={6} spacing={3}>
            <Heading
              fontSize={
                isLargeScreen ? "lg" : isVerySmallScreen ? "0.85rem" : "xl"
              }
              color={HeadingText[colorMode]}
              fontFamily="monospace"
            >
              Embedded System Engineer @ Nagano College of Technology
            </Heading>
            <Heading
              fontSize={
                isLargeScreen ? "sm" : isVerySmallScreen ? "0.8rem" : "md"
              }
              textTransform="uppercase"
              color={DateText[colorMode]}
              fontFamily="monospace"
            >
              September 2017 - October 2017
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
                  This internship was done during the 6 weeks semester break in
                  the 2nd year of polytechnic. The internship requires rendering
                  assistance to student in the projects and requires knowledge
                  in Java and Raspberry Pi.
                </Text>
              </>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default NaganoInternship;
