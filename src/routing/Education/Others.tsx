import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Others = () => {
  return (
    <>
      <Text fontSize="2xl" fontFamily="monospace">
        ./others
      </Text>
      <UnorderedList styleType="none">
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./ma1511_engineering_calculus: B+
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./ma1512_differential_equations_for_engineering: B+
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./ie2141_systems_thinking_and_dynamics: A
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./pf1101_fundamentals_of_project_management: A
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default Others;
