import React from "react";
import { ImageProps } from "./ImageProps.ts";
import SingaporePolytechnicLogo from "../../assets/SingaporePolytechnicLogo.png";
import { Box, Image } from "@chakra-ui/react";

const SPImage: React.FC<ImageProps> = ({ title, onClick }) => {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      onClick={handleClick}
      border="3px solid"
      borderColor="transparent"
      _hover={{ borderColor: "blue.500" }}
      marginLeft={3}
    >
      <Image
        src={SingaporePolytechnicLogo}
        boxSize="60px"
        onClick={handleClick}
      />
    </Box>
  );
};

export default SPImage;
