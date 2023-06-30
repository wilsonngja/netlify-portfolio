import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Programming = () => {
  return (
    <>
      <Text fontSize="2xl" fontFamily="monospace">
        ./programming
      </Text>
      <UnorderedList styleType="none">
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cs1010_programming_methodology: B
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cs2040c_data_structure_and_algorithm: B
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default Programming;
