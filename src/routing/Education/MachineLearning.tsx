import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

const MachineLearning = () => {
  return (
    <>
      <Text fontSize="2xl" fontFamily="monospace">
        ./machine_learning
      </Text>
      <UnorderedList styleType="none">
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./ma1508e_linear_algebra_for_engineering: S
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./ee2211_introduction_to_machine_learning: A-
        </ListItem>
        <ListItem paddingLeft={4} fontSize="xl" fontFamily="monospace">
          ./cs3244_machine_learning: (forecasted)
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default MachineLearning;
