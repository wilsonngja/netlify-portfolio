import {
  Grid,
  GridItem,
  useBreakpointValue,
  useToast,
  Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import HeadingText from "../HeadingText";
import IntroductionText from "./IntroductionText";
import SelectorList from "./SelectorList";
import { useLocation } from "react-router-dom";
import logo from "../../assets/MainPageProfilePic.jpg";

function HomePage() {
  const isLargeScreenAndMore = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    "2xl": true,
  });

  const toast = useToast();
  const location = useLocation();

  useEffect(() => {
    const handleScreenLoad = () => {
      toast({
        title: "Keyboard Control",
        description: "Control with up and down arrow",
        status: "info",
        duration: 3000, // Toast duration in milliseconds
        isClosable: true, // Enable close button
      });
    };

    if (isLargeScreenAndMore) {
      handleScreenLoad();
    }
  }, [location.pathname, toast]);

  const isSmallScreen = useBreakpointValue({
    base: true,
    sm: true,
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

  const isXLScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
    "2xl": false,
  });

  return isSmallScreen ? (
    <Grid
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(10, 1fr)"
      paddingX={6}
      paddingTop={6}
    >
      <GridItem colSpan={2} rowSpan={2}>
        <IntroductionText />
      </GridItem>

      <GridItem colSpan={2} rowSpan={2} display="flex" alignItems="center">
        <HeadingText />
      </GridItem>
      <GridItem rowSpan={6}>
        <SelectorList />
      </GridItem>
    </Grid>
  ) : (
    <Grid templateColumns="repeat(4, 1fr)" paddingX={6} paddingTop={6}>
      {!isSmallScreen && (
        <GridItem
          colSpan={1}
          rowSpan={2}
          display="flex"
          justifyContent="center"
        >
          <Image
            src={logo}
            boxSize={isLargeScreen ? "200px" : isXLScreen ? "210px" : "280px"}
            borderRadius="full"
          />
        </GridItem>
      )}
      <GridItem colSpan={3} rowSpan={2} display="flex" alignItems="center">
        <IntroductionText />
      </GridItem>
      <GridItem colStart={2} colSpan={3} display="flex">
        <HeadingText />
      </GridItem>
      <GridItem colStart={2} rowSpan={3}>
        <SelectorList />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
