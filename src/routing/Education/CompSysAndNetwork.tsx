import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

const CompSysAndNetwork = () => {
  return (
    <>
      <Text fontSize="2xl" fontFamily="monospace">
        ./comp_sys_and_network
      </Text>
      <UnorderedList styleType="none">
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cg2027_transistor_level_digital_circuits: A-
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cg2028_computer_organization: A-
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cg2023_signals_and_systems: A-
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cg2271_real_time_operating_systems: A-
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default CompSysAndNetwork;
