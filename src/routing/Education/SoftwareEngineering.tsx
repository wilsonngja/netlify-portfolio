import { ListItem, Text, UnorderedList, useColorMode } from "@chakra-ui/react";

const SoftwareEngineering = () => {
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
        ./software_engineering
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
          ./cp2016_independent_software_development_project:{" "}
          <Text as="span" fontWeight="semibold" color={GradeColor[colorMode]}>
            CS
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
          ./cs2113_software_engineering_and_oop:{" "}
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
          ./cs3219_software_engineering_principles_and_patterns:{" "}
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

export default SoftwareEngineering;
