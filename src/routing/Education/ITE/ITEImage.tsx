import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ITELogo from "../../../assets/ITELogo.jpeg";

import { ImageProps } from "../ImageProps.ts";

const ITEImage: React.FC<ImageProps> = ({ title, onClick }) => {
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
      _hover={{ border: "3px solid", borderColor: "blue.500" }}
      marginLeft={3}
    >
      <Image src={ITELogo} boxSize="60px" onClick={handleClick} />
    </Box>
  );
};

export default ITEImage;
