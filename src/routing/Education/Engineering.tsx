import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

const DigitalDesign = () => {
  return (
    <>
      <Text fontSize="2xl" fontFamily="monospace">
        ./engineering
      </Text>
      <UnorderedList styleType="none">
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cg1111a_engineering_principles_and_practice_ii : B
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cg2111a_engineering_principles_and_practice_ii : A
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./ee2026_digital_design: B
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default DigitalDesign;
