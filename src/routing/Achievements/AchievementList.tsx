import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import OrbitalApollo from "./OrbitalApollo";
import DiplomaWithMerit from "./DiplomaWithMerit";
import ModelStudentAward from "./ModelStudentAward";
import POLITE from "./POLITE";

const AchievementList = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: false,
    "2xl": false,
  });

  return (
    <Grid
      paddingX={isLargeScreen ? 2 : 10}
      paddingBottom={10}
      templateColumns={{
        base: "repeat(1 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(4,1fr)",
      }}
      gap={10}
      width="100%"
    >
      <GridItem>
        <OrbitalApollo />
      </GridItem>
      <GridItem>
        <DiplomaWithMerit />
      </GridItem>
      <GridItem>
        <ModelStudentAward />
      </GridItem>
      <GridItem>
        <POLITE />
      </GridItem>
    </Grid>
  );
};

export default AchievementList;
