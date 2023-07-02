import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import HeadingText from "../HeadingText";
import Control from "./Control";
import IntroductionText from "./IntroductionText";
import SelectorList from "./SelectorList";

function HomePage() {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    "2xl": true,
  });

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
      {isLargeScreen && (
        <GridItem colSpan={2} display="flex" justifyContent="flex-end">
          <Control />
        </GridItem>
      )}
    </Grid>
  );
}

export default HomePage;
