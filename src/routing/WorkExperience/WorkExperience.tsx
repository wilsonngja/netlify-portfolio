import { Grid, useBreakpointValue } from "@chakra-ui/react";
import CSIT from "./CSIT";
import MoonTechnologies from "./MoonTechnologies";
import NaganoInternship from "./NaganoInternship";
import WorkExperienceTitle from "./WorkExperienceTitle";

const WorkExperience = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: false,
    "2xl": false,
  });

  return (
    <>
      <WorkExperienceTitle />
      <Grid
        templateColumns={{
          base: "repeat(1 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(3,1fr)",
        }}
        paddingX={isLargeScreen ? 2 : 10}
        justifyItems="center"
      >
        <NaganoInternship />
        <CSIT />
        <MoonTechnologies />
      </Grid>
    </>
  );
};

export default WorkExperience;
