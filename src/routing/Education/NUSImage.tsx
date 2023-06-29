import React from "react";
import { ImageProps } from "./ImageProps";
import { Box, Image } from "@chakra-ui/react";
import NUSLogo from "../../assets/NUSLogo.jpg";

const NUSImage: React.FC<ImageProps> = ({ title, onClick }) => {
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
      <Image src={NUSLogo} boxSize="60px" onClick={handleClick} />
    </Box>
  );
};

export default NUSImage;
