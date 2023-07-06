import { Grid, GridItem, useBreakpointValue, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import HeadingText from "../HeadingText";
import IntroductionText from "./IntroductionText";
import SelectorList from "./SelectorList";
import { useLocation } from "react-router-dom";

function HomePage() {
  const isLargeScreen = useBreakpointValue({
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

    if (isLargeScreen) {
      handleScreenLoad();
    }
  }, [location.pathname, toast]);

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(10, 1fr)"
      paddingX={6}
      paddingTop={6}
    >
      <GridItem colSpan={2} rowSpan={2}>
        <IntroductionText />
      </GridItem>

      <GridItem colSpan={2} rowSpan={2}>
        <HeadingText />
      </GridItem>
      <GridItem rowSpan={6}>
        <SelectorList />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
