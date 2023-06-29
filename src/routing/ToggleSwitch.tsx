import {
  HStack,
  Icon,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const ToggleSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isSmallScreen = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <HStack onClick={toggleColorMode}>
      {/* <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size={isSmallScreen ? "sm" : "md"}
      > */}
      <Icon
        as={colorMode === "dark" ? BsFillMoonFill : BsFillSunFill}
        boxSize={isSmallScreen ? "17px" : "22px"}
        color={colorMode === "dark" ? "yellow.300" : "orange.400"}
      />
      {/* </Switch> */}
      <Text
        fontSize={isSmallScreen ? "xs" : "lg"}
        fontWeight="semibold"
        color={colorMode === "dark" ? "yellow.300" : "orange.400"}
      >
        {colorMode === "dark" ? "Dark" : "Light"}
      </Text>
    </HStack>
  );
};

export default ToggleSwitch;
