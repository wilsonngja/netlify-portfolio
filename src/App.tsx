import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import IntroductionText from "./components/IntroductionText";
import SelectorList from "./components/SelectorList";
import HeadingText from "./components/HeadingText";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`} padding="10px">
      <GridItem area="nav" className="title" paddingTop={2} paddingLeft={3}>
        <NavBar />
      </GridItem>
      <GridItem area="main" className="title" paddingTop={5} paddingLeft={3}>
        <IntroductionText />
      </GridItem>
      <GridItem paddingLeft={3} paddingTop={10} marginTop={5}>
        <HeadingText />
      </GridItem>
      <GridItem paddingLeft={3}>
        <SelectorList />
      </GridItem>
    </Grid>
  );
}

export default App;
