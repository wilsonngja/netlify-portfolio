import { Box, HStack, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import ITEImage from "./ITE/ITEImage";
import SPImage from "./SPImage";
import NUSImage from "./NUSImage";
import ITEPage from "./ITE/ITEPage";
import SPPage from "./SPPage";
import NUSPage from "./NUSPage";

const Education = () => {
  const [title, setTitle] = useState("Initial Title");

  const handleImageClick = (newTitle: string) => {
    setTitle(newTitle);

    setTimeout(() => {
      setTitle(newTitle);
    }, 1000);
  };

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(12, 1fr)"
      flex="1"
    >
      <GridItem rowSpan={1} colSpan={12}>
        <HStack paddingBottom={3} marginBottom={3}>
          <ITEImage title="ITE" onClick={handleImageClick} />
          <SPImage title="SP" onClick={handleImageClick} />
          <NUSImage title="NUS" onClick={handleImageClick} />
        </HStack>
      </GridItem>
      <GridItem colSpan={12} rowSpan={10} paddingLeft={5}>
        <Box>
          {title === "ITE" ? (
            <ITEPage />
          ) : title === "SP" ? (
            <SPPage />
          ) : title === "NUS" ? (
            <NUSPage />
          ) : null}
        </Box>
      </GridItem>

      {/* <HStack justify="flex-start">
        <Box paddingX={6} display="flex" alignItems="left"></Box>
        <VStack display="flex" alignSelf="flex-start"></VStack>
      </HStack> */}
    </Grid>
  );
};

export default Education;
