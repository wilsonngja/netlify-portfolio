import { Grid, GridItem } from "@chakra-ui/react";
import IntroductionText from "./IntroductionText";
import SelectorList from "../SelectorList";
import HeadingText from "../HeadingText";

function HomePage() {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(10, 1fr)"
      padding={6}
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
