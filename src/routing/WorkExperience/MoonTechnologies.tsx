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
import MoonInternshipTag from "./MoonInternshipTag";
import ThinkAboutIt from "../../assets/Roll-Safe-Think-About-It.jpg";

const MoonTechnologies = () => {
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
    <Flex flex="1" borderRadius="md" paddingBottom={10}>
      <Card maxW={isLargeScreen ? "xs" : "sm"}>
        <CardBody>
          <Image src={ThinkAboutIt} borderRadius="lg" />
          <Stack marginTop={6} spacing={3}>
            <Heading
              fontSize={
                isLargeScreen ? "lg" : isVerySmallScreen ? "0.85rem" : "xl"
              }
              color={HeadingText[colorMode]}
              fontFamily="monospace"
            >
              BCI Engineering Intern @<br />
              Moon Technologies Pte Ltd
            </Heading>
            <Heading
              fontSize={
                isLargeScreen ? "sm" : isVerySmallScreen ? "0.8rem" : "md"
              }
              textTransform="uppercase"
              color={DateText[colorMode]}
              fontFamily="monospace"
            >
              June 2023 - August 2023
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
                  This internship is still in progress, please stay tune for
                  more updates.
                </Text>
              </>
            )}
          </Stack>
          <Divider paddingY={2} />
          <HStack paddingTop={4} align="flex-end">
            <Text
              color={TagText[colorMode]}
              fontFamily="monospace"
              fontSize="0.95rem"
              letterSpacing="-0.005rem"
            >
              Tags:
            </Text>
            <MoonInternshipTag />
          </HStack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default MoonTechnologies;
