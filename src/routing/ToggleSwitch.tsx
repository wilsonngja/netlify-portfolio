import {
  HStack,
  Switch,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const ToggleSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isSmallScreen = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size={isSmallScreen ? "sm" : "md"}
      />
      <Text
        color={colorMode === "dark" ? "blue.400" : "blackAlpha.800"}
        fontSize={isSmallScreen ? "xs" : "lg"}
        fontWeight="semibold"
      >
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ToggleSwitch;
