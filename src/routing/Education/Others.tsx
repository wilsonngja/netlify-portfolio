import { ListItem, Text, UnorderedList, useColorMode } from "@chakra-ui/react";

const Others = () => {
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
        ./others
      </Text>
      <UnorderedList styleType="none">
        <ListItem
          paddingLeft={{ base: 0, sm: 0, md: 4, lg: 0, xl: 4, "2xl": 4 }}
          fontSize={{
            base: "xs",
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
          ./ma1511_engineering_calculus:{" "}
          <Text as="span" fontWeight="semibold" color={GradeColor[colorMode]}>
            B+
          </Text>
        </ListItem>
        <ListItem
          paddingLeft={{ base: 0, sm: 0, md: 4, lg: 0, xl: 4, "2xl": 4 }}
          fontSize={{
            base: "xs",
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
          ./ma1512_differential_equations_for_engineering:{" "}
          <Text as="span" fontWeight="semibold" color={GradeColor[colorMode]}>
            B+
          </Text>
        </ListItem>
        <ListItem
          paddingLeft={{ base: 0, sm: 0, md: 4, lg: 0, xl: 4, "2xl": 4 }}
          fontSize={{
            base: "xs",
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
          ./ie2141_systems_thinking_and_dynamics:{" "}
          <Text as="span" fontWeight="semibold" color={GradeColor[colorMode]}>
            A
          </Text>
        </ListItem>
        <ListItem
          paddingLeft={{ base: 0, sm: 0, md: 4, lg: 0, xl: 4, "2xl": 4 }}
          fontSize={{
            base: "xs",
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
          ./pf1101_fundamentals_of_project_management:{" "}
          <Text as="span" fontWeight="semibold" color={GradeColor[colorMode]}>
            A
          </Text>
        </ListItem>
        <ListItem
          paddingLeft={{ base: 0, sm: 0, md: 4, lg: 0, xl: 4, "2xl": 4 }}
          fontSize={{
            base: "xs",
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
          ./eg2501_liveable_cities:{" "}
          <Text as="span" fontWeight="semibold" color={GradeColor[colorMode]}>
            A
          </Text>
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default Others;
