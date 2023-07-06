import {
  Box,
  Card,
  CardBody,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import DWM from "../../assets/DWM.jpg";

const DiplomaWithMerit = () => {
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
          <Center>
            <Image src={DWM} borderRadius="lg" height="80%" width="80%" />
          </Center>
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
              Diploma with Merit (Computer Engineering) + Book Prize
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
                  Awarded to top 5% of graduating cohort
                </Text>
              </>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default DiplomaWithMerit;
