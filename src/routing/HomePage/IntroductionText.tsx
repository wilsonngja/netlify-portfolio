import Typed from "react-typed";
import {
  HStack,
  Text,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

const IntroductionText = () => {
  const isSmallScreen = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  });
  const isMediumScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: false,
    xl: false,
    "2xl": false,
  });

  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: false,
    "2xl": false,
  });

  const isXlScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
    "2xl": false,
  });

  const is2XlScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": true,
  });

  const [isMidLargeScreen] = useMediaQuery(
    "(min-width: 930px) and  (max-width: 1024px)"
  );
  const { colorMode } = useColorMode();

  const color = {
    dark: "teal.300",
    light: "blue.500",
  };

  const introduction = [
    " wilson_ng",
    " a_bci_engineering_intern",
    " a_table_tennis_player",
    " a_fullstack_developer",
    " craving_pi_pa_gao",
    " a_computer_engineer",
  ];

  const MyStyle: React.CSSProperties = {
    fontWeight: "semibold",
  };

  const MyStyle2: React.CSSProperties = {
    fontWeight: "normal",
    fontFamily: "monospace",
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <Text paddingRight={2} fontSize={"xl"}>
            {"Hello! I'm"}
          </Text>
          <Text as="b" color={color[colorMode]} fontSize={"xl"} height={2}>
            <Typed
              strings={introduction}
              typeSpeed={50}
              backSpeed={60}
              loop
              style={MyStyle}
            />
          </Text>
        </>
      ) : null}

      {isMediumScreen && !isMidLargeScreen ? (
        <>
          <Text paddingRight={2} fontSize="4xl">
            {"Hello! I'm"}
          </Text>
          <Text color={color[colorMode]} fontSize="4xl" height={2}>
            <Typed strings={introduction} typeSpeed={50} backSpeed={60} loop />
          </Text>
        </>
      ) : null}

      {isMidLargeScreen || isLargeScreen ? (
        <HStack>
          <Text paddingRight={4} fontSize="4xl">
            {"Hello! I'm"}
          </Text>
          <Text color={color[colorMode]} fontSize="4xl">
            <Typed
              strings={introduction}
              typeSpeed={50}
              backSpeed={60}
              loop
              style={MyStyle2}
            />
          </Text>
        </HStack>
      ) : null}

      {isXlScreen ? (
        <HStack>
          <Text paddingRight={4} fontSize="5xl">
            {"Hello! I'm"}
          </Text>
          <Text color={color[colorMode]} fontSize="5xl">
            <Typed
              strings={introduction}
              typeSpeed={50}
              backSpeed={60}
              loop
              style={MyStyle2}
            />
          </Text>
        </HStack>
      ) : null}

      {is2XlScreen ? (
        <HStack>
          <Text paddingRight={4} fontSize="6xl">
            {"Hello! I'm"}
          </Text>
          <Text color={color[colorMode]} fontSize="6xl">
            <Typed
              strings={introduction}
              typeSpeed={50}
              backSpeed={60}
              loop
              style={MyStyle2}
            />
          </Text>
        </HStack>
      ) : null}
    </>
  );
};

export default IntroductionText;
