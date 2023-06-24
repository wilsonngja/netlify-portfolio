import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ToggleSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text
        color={colorMode === "dark" ? "blue.400" : "blackAlpha.800"}
        fontWeight="semibold"
      >
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ToggleSwitch;
