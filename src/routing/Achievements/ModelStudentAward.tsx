import {
  Box,
  Card,
  CardBody,
  Center,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import MSA_Image from "../../assets/MSA_Image.jpg";
import MSA_Image2 from "../../assets/MSA_Image2.jpg";
import MSA_Image3 from "../../assets/MSA_Image3.jpg";
// const MSA_Image = require("../../assets/MSA_Image.jpg").default;
// const MSA_Image2 = require("../../assets/MSA_Image2.jpg").default;
// const MSA_Image3 = require("../../assets/MSA_Image3.jpg").default;
// import { allImages } from "./Images";

import { useEffect, useState } from "react";

const ModelStudentAward = () => {
  const { colorMode } = useColorMode();
  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");

  const [currentImage, setCurrentImage] = useState(0);
  // const [images, setImages] = useState<string[]>([]);

  const imageList = [
    MSA_Image,
    MSA_Image2,
    MSA_Image3,
    // Add more image imports as needed
  ];

  // useEffect(() => {
  //   const importedImages = imagePaths.map((path) => {
  //     return import(path)
  //       .then((module) => module.default)
  //       .catch((error) => {
  //         console.error("Error loading image:", error);
  //         return null;
  //       });
  //   });

  //   Promise.all(importedImages)
  //     .then((resolvedImages) => {
  //       const filteredImages = resolvedImages.filter(
  //         (image) => image !== null
  //       ) as string[];
  //       setImages(filteredImages);
  //     })
  //     .catch((error) => {
  //       console.error("Error loading images:", error);
  //     });
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageList]);

  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    "2xl": true,
  });

  const is2XLLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": true,
  });

  const HeadingText = {
    dark: "teal.300",
    light: "blue.500",
  };

  const DescriptionText = {
    dark: "purple.100",
    light: "purple.800",
  };

  return (
    <Box width="100%" height="100%">
      <Card width="100%" height="100%" overflow="hidden">
        <CardBody>
          <Center>
            <Image
              src={imageList[currentImage]}
              alt="Card Image"
              objectFit="cover"
              height="100%"
              width="100%"
            />
          </Center>
          <Stack marginTop={6} spacing={3}>
            <Heading
              fontSize={
                isLargeScreen
                  ? is2XLLargeScreen
                    ? "2xl"
                    : "lg"
                  : isVerySmallScreen
                  ? "0.85rem"
                  : "xl"
              }
              color={HeadingText[colorMode]}
              fontFamily="monospace"
            >
              Model Student Award
            </Heading>

            {isLargeScreen && (
              <>
                <Divider />
                <Text
                  color={DescriptionText[colorMode]}
                  fontFamily="monospace"
                  fontSize="0.9rem"
                  letterSpacing="-0.005rem"
                >
                  It's one of the highest accolades of SP which aims to
                  recognise the achievements and contributions of students in
                  their Co-Curricular Activities or Non-Academic Projects. The
                  awards affirm outstanding SP students who have shown efforts
                  and made significant contributions towards the vibrancy of SP.
                  Recipients of the awards are role-models who uphold the SP
                  CORE values and qualities of SP Graduate Attributes.
                </Text>
              </>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ModelStudentAward;
