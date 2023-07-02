import { ListItem, Text, UnorderedList, useColorMode } from "@chakra-ui/react";

const MachineLearning = () => {
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

  const ForecastedColor = {
    dark: "pink.300",
    light: "pink.500",
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
        ./machine_learning
      </Text>
      <UnorderedList styleType="none">
        <ListItem
          paddingLeft={{ base: 0, sm: 0, md: 4, lg: 0, xl: 4, "2xl": 4 }}
          fontSize={{
            base: "sm",
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
          ./ma1508e_linear_algebra_for_engineering:{" "}
          <Text as="span" fontWeight="semibold" color={GradeColor[colorMode]}>
            S
          </Text>
        </ListItem>
        <ListItem
          paddingLeft={{ base: 0, sm: 0, md: 4, lg: 0, xl: 4, "2xl": 4 }}
          fontSize={{
            base: "sm",
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
          ./ee2211_introduction_to_machine_learning:{" "}
          <Text as="span" fontWeight="semibold" color={GradeColor[colorMode]}>
            A-
          </Text>
        </ListItem>
        <ListItem
          paddingLeft={{ base: 0, sm: 0, md: 4, lg: 0, xl: 4, "2xl": 4 }}
          fontSize={{
            base: "sm",
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
          ./cs3244_machine_learning:{" "}
          <Text
            as="span"
            fontWeight="semibold"
            color={ForecastedColor[colorMode]}
          >
            (forecasted)
          </Text>
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default MachineLearning;
