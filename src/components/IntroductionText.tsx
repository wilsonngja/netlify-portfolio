import Typed from "react-typed";
import { HStack, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";

const IntroductionText = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 600px)");
  const [isMidSmallScreen] = useMediaQuery(
    "(min-width: 520px) and (max-width: 600px)"
  );
  const [isMediumScreen] = useMediaQuery(
    "(min-width: 601px) and (max-width: 1024px)"
  );
  const [isMidLargeScreen] = useMediaQuery(
    "(min-width: 930px) and  (max-width: 1024px)"
  );
  const [isLargeScreen] = useMediaQuery("(min-width: 1025px)");

  const { colorMode } = useColorMode();

  const color = {
    dark: "purple.400",
    light: "purple.500",
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <Text paddingRight={2} fontSize={isMidSmallScreen ? "3xl" : "2xl"}>
            {"Hello! I'm"}
          </Text>
          <Text
            color={color[colorMode]}
            fontSize={isMidSmallScreen ? "3xl" : "2xl"}
            height={2}
          >
            <Typed
              strings={[
                " Wilson Ng",
                " a BCI Engineering Intern",
                " a Table Tennis Player",
                " a Fullstack Developer",
                " a Computer Engineer",
              ]}
              typeSpeed={50}
              backSpeed={60}
              loop
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
                " Wilson Ng",
                " a BCI Engineering Intern",
                " a Table Tennis Player",
                " a Fullstack Developer",
                " a Computer Engineer",
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
                " Wilson Ng",
                " a BCI Engineering Intern",
                " a Table Tennis Player",
                " a Fullstack Developer",
                " a Computer Engineer",
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
