import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

const SoftwareEngineering = () => {
  return (
    <>
      <Text fontSize="2xl" fontFamily="monospace">
        ./software_engineering
      </Text>
      <UnorderedList styleType="none">
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cp2016_independent_software_development_project: CS
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cs2113_software_engineering_and_object_oriented_programming: A-
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cs3219_software_engineering_principles_and_patterns: (forecasted)
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default SoftwareEngineering;
