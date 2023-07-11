import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Text,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import DWM from "../../assets/DWM.jpg";

const DiplomaWithMerit = () => {
  const { colorMode } = useColorMode();
  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");

  const isLargeScreenOnwards = useBreakpointValue({
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

  const SubHeadingText = {
    dark: "green.300",
    light: "green.500",
  };

  const is2XLLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": true,
  });

  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: false,
    "2xl": false,
  });

  return (
    <Card width="100%" height="100%">
      <CardHeader display="flex" justifyContent="center" paddingBottom={0}>
        <Image src={DWM} borderRadius="lg" />
      </CardHeader>
      <CardBody>
        <Text
          fontSize={
            isLargeScreenOnwards
              ? is2XLLargeScreen
                ? "1.75rem"
                : isLargeScreen
                ? "2xl"
                : "lg"
              : isVerySmallScreen
              ? "0.85rem"
              : "xl"
          }
          color={HeadingText[colorMode]}
          fontFamily="monospace"
          fontWeight="semibold"
        >
          Diploma with Merit
        </Text>
        <Text
          fontSize={
            isLargeScreenOnwards
              ? is2XLLargeScreen
                ? "2xl"
                : isLargeScreen
                ? "xl"
                : "md"
              : isVerySmallScreen
              ? "0.85rem"
              : "xl"
          }
          color={SubHeadingText[colorMode]}
          fontFamily="monospace"
          fontWeight="semibold"
        >
          (May 2019)
        </Text>
        {isLargeScreenOnwards && (
          <>
            <Divider />
            <Text
              color={DescriptionText[colorMode]}
              fontFamily="monospace"
              fontSize={{ lg: "md", xl: "sm", "2xl": "1.075rem" }}
              letterSpacing="-0.005rem"
              paddingTop={5}
            >
              Received this award as the top 10% of student from Singapore
              Polytechnic Diploma in Computer Engineering.
            </Text>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default DiplomaWithMerit;
