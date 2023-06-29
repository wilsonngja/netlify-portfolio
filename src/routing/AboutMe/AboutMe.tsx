import {
  useBreakpointValue,
  Grid,
  GridItem,
  Image,
  Text,
  Divider,
  HStack,
  Box,
  VStack,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import profilePicture from "../../assets/profilePicture.jpg";
import Typed from "react-typed";
import { useState } from "react";
import AboutMeText from "./AboutMeText";
import Skillset from "./Skillset";
import Traits from "./Traits";
import Contact from "./Contact";

const AboutMe = () => {
  const headingStyle: React.CSSProperties = {
    color: "#B794F4",
    fontFamily: "monospace",
    fontWeight: "bold",
  };

  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");
  const [isMidSmallScreen] = useMediaQuery("(min-width: 610px");
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

  const isXlLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
    "2xl": false,
  });

  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  if (isVerySmallScreen) {
    return (
      <Grid templateColumns="repeat(1, 1fr)" paddingX={4} paddingY={4}>
        <Center>
          <Image
            src={profilePicture}
            borderRadius="full"
            borderWidth="4px"
            borderStyle="solid"
            borderColor="orange.200"
            boxSize="150px"
          />
        </Center>
        <Center>
          <Text fontSize="lg" fontWeight="medium" alignItems="top">
            Wilson NG Jing An
          </Text>
        </Center>
        <Center>
          <Text fontSize="sm" fontWeight="medium" letterSpacing="0.025em">
            (@wilsonngja)
          </Text>
        </Center>
        <Traits />
        <Divider paddingTop={2} />
        <Text fontSize="xl" fontFamily="monospace" paddingTop={4}>
          <Typed
            strings={["introduction:"]}
            typeSpeed={50}
            style={headingStyle}
            showCursor={!isTypingComplete}
            onComplete={handleTypingComplete}
            cursorChar="|"
          />
        </Text>
        <AboutMeText />
        <Divider />
        <Text fontSize="xl" fontFamily="monospace" marginTop={5}>
          <Typed
            strings={["my_skillset:"]}
            typeSpeed={50}
            style={headingStyle}
            showCursor={!isTypingComplete}
            onComplete={handleTypingComplete}
            cursorChar="|"
          />
        </Text>
        <Skillset />
        <Divider />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Contact />
        </Box>
      </Grid>
    );
  } else if (isSmallScreen) {
    return (
      <Grid
        templateColumns="repeat(1, 1fr)"
        paddingX={4}
        paddingY={4}
        alignContent="center"
        justifyItems="center"
      >
        <GridItem>
          <HStack>
            <Image
              src={profilePicture}
              borderRadius="full"
              borderWidth="4px"
              borderStyle="solid"
              borderColor="orange.200"
              boxSize="150px"
              justifySelf="left"
              alignSelf="left"
            />
            <VStack align="left" spacing={0} paddingX={4}>
              <Traits />
            </VStack>

            {isMidSmallScreen && <Contact />}
          </HStack>
        </GridItem>
        <Divider paddingTop={3} />
        <GridItem>
          <Text fontSize="xl" fontFamily="monospace" marginX={1} paddingTop={4}>
            <Typed
              strings={["introduction:"]}
              typeSpeed={50}
              style={headingStyle}
              showCursor={!isTypingComplete}
              onComplete={handleTypingComplete}
              cursorChar="|"
            />
          </Text>
          <AboutMeText />
          <Divider />
        </GridItem>

        {/* Skillset */}
        <GridItem>
          <Text fontSize="xl" fontFamily="monospace" marginX={1} marginTop={5}>
            <Typed
              strings={["my_skillset:"]}
              typeSpeed={50}
              style={headingStyle}
              showCursor={!isTypingComplete}
              onComplete={handleTypingComplete}
              cursorChar="|"
            />
          </Text>
          <Skillset />
          <Divider paddingTop={2} />
        </GridItem>

        {/* Contact Information */}
        {!isMidSmallScreen && (
          <>
            <Contact />
            <Divider paddingTop={2} />
          </>
        )}
      </Grid>
    );
  } else if (isMediumScreen) {
    return (
      <Box paddingX={5}>
        <Grid
          templateColumns="repeat(3, 1fr)"
          padding={4}
          alignContent="center"
          justifyItems="center"
        >
          <GridItem colSpan={1}>
            <Image
              src={profilePicture}
              borderRadius="full"
              borderWidth="4px"
              borderStyle="solid"
              borderColor="orange.200"
              boxSize="200px"
            />
          </GridItem>

          <GridItem colSpan={2}>
            <HStack>
              <Text fontSize="2xl" paddingTop={2} fontWeight="semibold">
                Wilson NG Jing An
              </Text>
              <Text fontSize="lg" fontWeight="semibold" paddingTop={2}>
                (@wilsonngja)
              </Text>
            </HStack>
            <HStack>
              <Box paddingTop={5}>
                <Contact />
              </Box>
              <Box paddingLeft={5}>
                <Traits />
              </Box>
            </HStack>
          </GridItem>
        </Grid>
        <Divider />
        <Text fontSize="2xl" fontFamily="monospace" paddingTop={2}>
          <Typed
            strings={["introduction:"]}
            typeSpeed={50}
            style={headingStyle}
            showCursor={!isTypingComplete}
            onComplete={handleTypingComplete}
            cursorChar="|"
          />
        </Text>
        <AboutMeText />
        <Divider paddingY={2} />
        <Text fontSize="2xl" fontFamily="monospace" paddingTop={2}>
          <Typed
            strings={["my_skillset:"]}
            typeSpeed={50}
            style={headingStyle}
            showCursor={!isTypingComplete}
            onComplete={handleTypingComplete}
            cursorChar="|"
          />
        </Text>
        <Skillset />
      </Box>
    );
  } else {
    return (
      <Grid templateColumns="repeat(7, 1fr)" paddingX={4} paddingY={4}>
        {/* Side Panel */}
        <GridItem colSpan={1}>
          <Grid templateColumns="repeat(1, 1fr)">
            <GridItem colSpan={1}>
              <Image
                src={profilePicture}
                borderRadius="full"
                borderWidth="4px"
                borderStyle="solid"
                borderColor="orange.200"
                boxSize={
                  isMediumScreen
                    ? "150px"
                    : isLargeScreen
                    ? "190px"
                    : isXlLargeScreen
                    ? "200px"
                    : "250px"
                }
              />
            </GridItem>

            <GridItem>
              <Text
                fontSize={{ md: "lg", lg: "xl", xl: "2xl", "2xl": "3xl" }}
                paddingTop={4}
                fontWeight="semibold"
              >
                Wilson NG Jing An
              </Text>
            </GridItem>
            <GridItem>
              <Text
                fontSize={{ md: "md", lg: "xl", xl: "2xl", "2xl": "2xl" }}
                fontWeight="semibold"
              >
                @wilsonngja
              </Text>
            </GridItem>
            <GridItem paddingTop={4}>
              <Traits />
              <Divider paddingTop={3} />
            </GridItem>
            <GridItem paddingTop={7}>
              <Contact />
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem colSpan={6} paddingLeft={{ md: 3, lg: 5 }}>
          <Text
            fontSize={{ md: "xl", lg: "3xl", xl: "3xl", "2xl": "4xl" }}
            fontFamily="monospace"
          >
            <Typed
              strings={["introduction:"]}
              typeSpeed={50}
              style={headingStyle}
              showCursor={!isTypingComplete}
              onComplete={handleTypingComplete}
              cursorChar="|"
            />
          </Text>
          <AboutMeText />
          <Text
            fontSize={{ md: "xl", lg: "3xl", xl: "3xl", "2xl": "4xl" }}
            fontFamily="monospace"
          >
            <Typed
              strings={["my_skillset:"]}
              typeSpeed={50}
              style={headingStyle}
              showCursor={!isTypingComplete}
              onComplete={handleTypingComplete}
              cursorChar="|"
            />
          </Text>
          <Skillset />
        </GridItem>
      </Grid>
    );
  }
};

export default AboutMe;
