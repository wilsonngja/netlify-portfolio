import { ListItem, Text, UnorderedList, useColorMode } from "@chakra-ui/react";

const Programming = () => {
  const { colorMode } = useColorMode();

  const SubTitleColor = {
    dark: "yellow.300",
    light: "orange.500",
  };

  const ModuleColor = {
    dark: "orange.300",
    light: "gray.600",
  };

  const GradeColor = {
    dark: "green.300",
    light: "cyan.500",
  };

  return (
    <>
      <Text
        fontSize={{
          base: "lg",
          sm: "lg",
          md: "xl",
          lg: "2xl",
          xl: "xl",
          "2xl": "2xl",
        }}
        fontFamily="monospace"
        color={SubTitleColor[colorMode]}
        fontWeight="550"
      >
        ./programming
      </Text>
      <UnorderedList styleType="none">
        <ListItem
          paddingLeft={{ base: 0, sm: 0, md: 4, lg: 0, xl: 4, "2xl": 4 }}
          fontSize={{
            base: "md",
            sm: "md",
            md: "lg",
            lg: "md",
            xl: "lg",
            "2xl": "xl",
          }}
          fontFamily="monospace"
          fontWeight="525"
          color={ModuleColor[colorMode]}
        >
          ./cs1010_programming_methodology:{" "}
          <Text as="span" fontWeight="semibold" color={GradeColor[colorMode]}>
            B
          </Text>
        </ListItem>
        <ListItem
          paddingLeft={{ base: 0, sm: 0, md: 4, lg: 0, xl: 4, "2xl": 4 }}
          fontSize={{
            base: "md",
            sm: "md",
            md: "lg",
            lg: "md",
            xl: "lg",
            "2xl": "xl",
          }}
          fontFamily="monospace"
          fontWeight="525"
          color={ModuleColor[colorMode]}
        >
          ./cs2040c_data_structure_and_algorithm:{" "}
          <Text as="span" fontWeight="semibold" color={GradeColor[colorMode]}>
            B
          </Text>
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default Programming;
