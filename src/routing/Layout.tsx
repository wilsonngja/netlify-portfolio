import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, Flex } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Flex
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      paddingBottom={2}
    >
      <Box paddingX={6} paddingY={3}>
        <NavBar />
      </Box>
      <Box style={{ flex: 1 }} overflowY="scroll">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layout;
