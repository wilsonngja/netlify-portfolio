import { Divider, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/avatar_logo.png";
import logo2 from "../assets/avatar_logo2.png";
import ToggleSwitch from "./ToggleSwitch";

const NavBar = () => {
  const isSmallScreen = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  });

  return (
    <>
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
      <Divider paddingTop={4} />
    </>
  );
};

export default NavBar;
