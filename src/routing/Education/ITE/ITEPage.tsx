import {
  Box,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Typed from "react-typed";

const ITEPage = () => {
  const headingStyle: React.CSSProperties = {
    color: "#B794F4",
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: "3xl",
  };

  return (
    <>
      <Text fontSize="4xl" display="flex" alignSelf="flex-start">
        <Typed
          strings={["education@ite/mechatronics_engineering"]}
          typeSpeed={50}
          style={headingStyle}
        />
      </Text>
      <Box paddingTop={5}>
        <Grid templateColumns="repeat(2, 1fr)">
          <Box>
            <Tabs>
              <TabList>
                <Tab>Year 1 Sem 1</Tab>
                <Tab>Year 1 Sem 2</Tab>
                <Tab>Year 2 Sem 1</Tab>
                <Tab>Year 2 Sem 2</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text fontFamily="monospace" fontSize="lg">
                    bm49010_bridging_mathematics__P
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    lfs80100_personal_and_professional_development_1__B
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    mc4001fp_cad_and_electro_mechanical_practices__A
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    mc4002fp_industrial_electronics__A
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    me49070_visual_basic_programming__B
                  </Text>
                </TabPanel>
                <TabPanel>
                  <Text fontFamily="monospace" fontSize="lg">
                    lfs89031_entrepreneurship_youth_enterprise__S
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    mc4003fp_pneumatics_and_automation__A
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    mc4004fp_plc_and_motor_control__A
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    mc49190_hydraulics__A
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    sw41080_sports_and_wellness_1__S
                  </Text>
                </TabPanel>
                <TabPanel>
                  <Text fontFamily="monospace" fontSize="lg">
                    lfs80200_personal_and_professional_development_II__A
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    mc5001fp_flexible_manufacturing_system__distinction
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    mc5003fp_microcontroller_and_computing__A
                  </Text>
                </TabPanel>
                <TabPanel>
                  <Text fontFamily="monospace" fontSize="lg">
                    mc5002fp_robotics_and_mechanics__dist
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    mc5004fp_project__A
                  </Text>
                  <Text fontFamily="monospace" fontSize="lg">
                    sw51080_sports_and_wellness_II__S
                  </Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default ITEPage;
