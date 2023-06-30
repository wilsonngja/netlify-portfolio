import { Grid, GridItem } from "@chakra-ui/react";
import EducationTitle from "./EducationTitle";
import Programming from "./Programming";
import SoftwareEngineering from "./SoftwareEngineering";
import MachineLearning from "./MachineLearning";
import CompSysAndNetwork from "./CompSysAndNetwork";
import DigitalDesign from "./Engineering";
import Others from "./Others";

const Education = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" flex="1" paddingX={6}>
      <GridItem colSpan={2} paddingBottom={10}>
        <EducationTitle />
      </GridItem>
      <GridItem paddingBottom={10}>
        <Programming />
      </GridItem>
      <GridItem paddingBottom={10}>
        <SoftwareEngineering />
      </GridItem>
      <GridItem paddingBottom={10}>
        <MachineLearning />
      </GridItem>
      <GridItem paddingBottom={10}>
        <CompSysAndNetwork />
      </GridItem>
      <GridItem paddingBottom={10}>
        <DigitalDesign />
      </GridItem>
      <GridItem paddingBottom={10}>
        <Others />
      </GridItem>
    </Grid>
  );
};

export default Education;
