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

import { useEffect, useState } from "react";
import POLITE1 from "../../assets/POLITE1.jpg";
import POLITE2 from "../../assets/POLITE2.jpg";
import POLITE3 from "../../assets/POLITE3.jpg";

const POLITE = () => {
  const { colorMode } = useColorMode();
  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");

  const [currentImage, setCurrentImage] = useState(0);

  const imageList = [POLITE1, POLITE2, POLITE3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageList]);

  const isLargeScreenOnwards = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
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

  const is2XLLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
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

  return (
    <Card width="100%" height="100%">
      <CardHeader display="flex" justifyContent="center" paddingBottom={0}>
        <Image src={imageList[currentImage]} borderRadius="lg" />
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
          POL-ITE Games (Table Tennis): Gold Medal
        </Text>
        <Text
          fontSize={
            isLargeScreen
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
          (October 2018)
        </Text>
        {isLargeScreen && (
          <>
            <Divider />
            <Text
              color={DescriptionText[colorMode]}
              fontFamily="monospace"
              fontSize={{ lg: "md", xl: "sm", "2xl": "1.075rem" }}
              letterSpacing="-0.005rem"
              paddingTop={5}
            >
              A table tennis compeition held annually across 5 different
              polytechnics and ITE. I represented Singapore Polytechnic as a
              vice captain.
            </Text>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default POLITE;
