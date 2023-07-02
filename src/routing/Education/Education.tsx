import { Grid, GridItem } from "@chakra-ui/react";
import CompSysAndNetwork from "./CompSysAndNetwork";
import EducationTitle from "./EducationTitle";
import DigitalDesign from "./Engineering";
import MachineLearning from "./MachineLearning";
import Others from "./Others";
import Programming from "./Programming";
import SoftwareEngineering from "./SoftwareEngineering";

const Education = () => {
  return (
    <>
      <EducationTitle />
      <Grid
        templateColumns="repeat(2, 1fr)"
        paddingX={{ base: 3, sm: 3, md: 3, lg: 4, xl: 5, "2xl": 6 }}
        alignItems="center"
      >
        <GridItem
          paddingBottom={10}
          colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1, "2xl": 1 }}
        >
          <Programming />
        </GridItem>
        <GridItem
          paddingBottom={10}
          colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1, "2xl": 1 }}
        >
          <SoftwareEngineering />
        </GridItem>
        <GridItem
          paddingBottom={10}
          colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1, "2xl": 1 }}
        >
          <MachineLearning />
        </GridItem>
        <GridItem
          paddingBottom={10}
          colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1, "2xl": 1 }}
        >
          <CompSysAndNetwork />
        </GridItem>
        <GridItem
          paddingBottom={10}
          colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1, "2xl": 1 }}
        >
          <DigitalDesign />
        </GridItem>
        <GridItem
          paddingBottom={10}
          colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1, "2xl": 1 }}
        >
          <Others />
        </GridItem>
      </Grid>
    </>
  );
};

export default Education;
