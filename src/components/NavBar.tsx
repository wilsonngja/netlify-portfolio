import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/My project.png";
import ToggleSwitch from "./ToggleSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="40px" />
      <ToggleSwitch />
    </HStack>
  );
};

export default NavBar;
