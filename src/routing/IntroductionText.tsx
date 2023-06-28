import Typed from "react-typed";
import {
  HStack,
  Text,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

const IntroductionText = () => {
  const isSmallScreen = useBreakpointValue({ base: true, sm: true, md: false });
  const isMediumScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: false,
  });

  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });

  // const [isMidSmallScreen] = useMediaQuery(
  //   "(min-width: 520px) and (max-width: 600px)"
  // );

  const [isMidLargeScreen] = useMediaQuery(
    "(min-width: 930px) and  (max-width: 1024px)"
  );
  const { colorMode } = useColorMode();

  const color = {
    dark: "teal.300",
    light: "blue.500",
  };

  const MyStyle: React.CSSProperties = {
    fontWeight: "semibold",
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
              strings={[
                " wilson_ng",
                " a_bci_engineering_intern",
                " a_table_tennis_player",
                " a_fullstack_developer",
                " craving_pi_pa_gao",
                " a_computer_engineer",
              ]}
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
            <Typed
              strings={[
                " wilson_ng",
                " a_bci_engineering_intern",
                " a_table_tennis_player",
                " a_fullstack_developer",
                " craving_pi_pa_gao",
                " a_computer_engineer",
              ]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
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
              strings={[
                " wilson_ng",
                " a_bci_engineering_intern",
                " a_table_tennis_player",
                " a_fullstack_developer",
                " craving_pi_pa_gao",
                " a_computer_engineer",
              ]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </Text>
        </HStack>
      ) : null}
    </>

    // <div>
    //   <HStack fontSize={["md", "1.25rem", "3xl", "5xl"]}>
    //     <Text paddingRight={[2, 2, 3, 4]}>Hello! I'm </Text>
    //     <Text
    //       color={color[colorMode]}
    //       fontWeight={["medium", "medium", "bold", "bold"]}
    //     >
    //       <Typed
    //         strings={[
    //           " Wilson Ng",
    //           " a BCI Engineering Intern",
    //           " a Table Tennis Player",
    //           " a Fullstack Developer",
    //           " a Computer Engineer",
    //         ]}
    //         typeSpeed={50}
    //         backSpeed={60}
    //         loop
    //       />
    //     </Text>
    //    </HStack>
    //   <br />
    // </div>
  );
};

export default IntroductionText;
