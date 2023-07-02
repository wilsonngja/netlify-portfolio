import { Box, Kbd, useColorMode } from "@chakra-ui/react";

const Control = () => {
  const { colorMode } = useColorMode();

  const colors = {
    dark: "whiteAlpha.900",
    light: "gray.800",
  };

  const backgroundColor = {
    dark: "green.700",
    light: "green.200",
  };

  return (
    <Box
      fontSize="lg"
      color={colors[colorMode]}
      bgColor={backgroundColor[colorMode]}
      paddingX={2}
      paddingBottom={1}
      borderRadius="xl"
    >
      Control with <Kbd>↑</Kbd> and <Kbd>↓</Kbd> arrow and <Kbd>Enter</Kbd> key
    </Box>
  );
};

export default Control;
