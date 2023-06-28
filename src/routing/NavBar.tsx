import { HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import logo from "../assets/avatar_logo.png";
import logo2 from "../assets/avatar_logo2.png";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";

const NavBar = () => {
  const isSmallScreen = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
  });

  return (
    <HStack justifyContent="space-between">
      <Link to="/">
        <Image
          src={logo}
          boxSize={isSmallScreen ? "40px" : "50px"}
          _hover={{ content: `url(${logo2})` }}
        />
      </Link>
      <ToggleSwitch />
    </HStack>
  );
};

export default NavBar;
