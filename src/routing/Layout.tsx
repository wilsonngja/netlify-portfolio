import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, Flex } from "@chakra-ui/react";
import FooterBar from "./FooterBar";

const Layout = () => {
  return (
    <>
      <Flex
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Box paddingX={6} paddingY={3}>
          <NavBar />
        </Box>
        <Box style={{ flex: 1 }} overflowY="scroll">
          <Outlet />
        </Box>
        <FooterBar />
      </Flex>
    </>
  );
};

export default Layout;
