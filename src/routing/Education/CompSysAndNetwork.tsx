import { ListItem, Text, UnorderedList, useColorMode } from "@chakra-ui/react";

const CompSysAndNetwork = () => {
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
        ./comp_sys_and_network
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
          ./cg2027_transistor_level_digital_circuits:{" "}
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
          ./cg2028_computer_organization:{" "}
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
          ./cg2023_signals_and_systems:{" "}
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
          ./cg2271_real_time_operating_systems:{" "}
          <Text as="span" fontWeight="semibold" color={GradeColor[colorMode]}>
            A-
          </Text>
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default CompSysAndNetwork;
