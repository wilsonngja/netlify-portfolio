import {
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import OrbitalApolloImage from "../../assets/OrbitalApollo.png";

const OrbitalApollo = () => {
  const { colorMode } = useColorMode();
  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");

  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    "2xl": true,
  });

  const HeadingText = {
    dark: "teal.300",
    light: "blue.500",
  };

  const DescriptionText = {
    dark: "purple.100",
    light: "purple.800",
  };

  const is2XLLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": true,
  });

  return (
    <Box width="100%" height="100%">
      <Card width="100%" height="100%" overflow="hidden">
        <CardBody>
          <Image src={OrbitalApolloImage} borderRadius="lg" />
          <Stack marginTop={6} spacing={3}>
            <Heading
              fontSize={
                isLargeScreen
                  ? is2XLLargeScreen
                    ? "2xl"
                    : "lg"
                  : isVerySmallScreen
                  ? "0.85rem"
                  : "xl"
              }
              color={HeadingText[colorMode]}
              fontFamily="monospace"
            >
              Orbital - Apollo 11 (Advanced)
            </Heading>

            {isLargeScreen && (
              <>
                <Divider />
                <Text
                  color={DescriptionText[colorMode]}
                  fontFamily="monospace"
                  fontSize="0.9rem"
                  letterSpacing="-0.005rem"
                >
                  Awarded to student that examplifies applications with good set
                  of core features and extensions while demostrating some effort
                  in following good software engineering practices and
                  principles
                </Text>
              </>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default OrbitalApollo;
