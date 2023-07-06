import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import OrbitalApollo from "./OrbitalApollo";
import DiplomaWithMerit from "./DiplomaWithMerit";
import ModelStudentAward from "./ModelStudentAward";

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
        md: "repeat(1, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(3, 1fr)",
        "2xl": "repeat(3,1fr)",
      }}
      gap={10}
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
    </Grid>
  );
};

export default AchievementList;
