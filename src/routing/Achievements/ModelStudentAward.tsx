import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import MSA_Image from "../../assets/MSA_Image.jpg";
import MSA_Image2 from "../../assets/MSA_Image2.jpg";
import MSA_Image3 from "../../assets/MSA_Image3.jpg";

import { useEffect, useState } from "react";

const ModelStudentAward = () => {
  const { colorMode } = useColorMode();
  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");

  const [currentImage, setCurrentImage] = useState(0);

  const imageList = [MSA_Image, MSA_Image2, MSA_Image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageList]);

  const isLargeScreenOnwards = useBreakpointValue({
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

  const SubHeadingText = {
    dark: "green.300",
    light: "green.500",
  };

  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: false,
    "2xl": false,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayOne = () => <ModalOverlay backdropFilter="blur(1px)" />;

  const [overlay, setOverlay] = useState(<OverlayOne />);

  const handleCardClick = () => {
    if (!isLargeScreenOnwards) {
      onOpen();
    }
  };

  return (
    <>
      <Card width="100%" height="100%" onClick={handleCardClick}>
        <CardHeader display="flex" justifyContent="center" paddingBottom={0}>
          <Image src={imageList[currentImage]} borderRadius="lg" />
        </CardHeader>
        <CardBody>
          <Text
            fontSize={
              isLargeScreenOnwards
                ? is2XLLargeScreen
                  ? "1.75rem"
                  : isLargeScreen
                  ? "2xl"
                  : "lg"
                : isVerySmallScreen
                ? "0.85rem"
                : "xl"
            }
            color={HeadingText[colorMode]}
            fontFamily="monospace"
            fontWeight="semibold"
          >
            Model Student Award
          </Text>
          <Text
            fontSize={
              isLargeScreenOnwards
                ? is2XLLargeScreen
                  ? "2xl"
                  : isLargeScreen
                  ? "xl"
                  : "md"
                : isVerySmallScreen
                ? "0.85rem"
                : "xl"
            }
            color={SubHeadingText[colorMode]}
            fontFamily="monospace"
            fontWeight="semibold"
          >
            (March 2019)
          </Text>
          {isLargeScreenOnwards && (
            <>
              <Divider />
              <Text
                color={DescriptionText[colorMode]}
                fontFamily="monospace"
                fontSize={{ lg: "md", xl: "sm", "2xl": "1.075rem" }}
                letterSpacing="-0.005rem"
                paddingTop={5}
              >
                It's one of the highest accolades of SP which aims to recognise
                the achievements and contributions of students in their
                Co-Curricular Activities or Non-Academic Projects. The awards
                affirm outstanding SP students who have shown efforts and made
                significant contributions towards the vibrancy of SP. Recipients
                of the awards are role-models who uphold the SP CORE values and
                qualities of SP Graduate Attributes.
              </Text>
            </>
          )}
        </CardBody>
      </Card>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{
          base: "sm",
          sm: "sm",
          md: "md",
          lg: "lg",
          xl: "xl",
          "2xl": "2xl",
        }}
        motionPreset="slideInBottom"
      >
        {overlay}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader overflow="hidden">
            <Image src={imageList[currentImage]} borderRadius="lg" />
            <Text
              fontSize={{
                base: "sm",
                sm: "sm",
                md: "xl",
              }}
              fontFamily="monospace"
              paddingTop={2}
              color={HeadingText[colorMode]}
            >
              Model Student Award
            </Text>
            <Text
              fontSize={{
                base: "xs",
                sm: "xs",
                md: "lg",
              }}
              fontFamily="monospace"
              color={SubHeadingText[colorMode]}
            >
              March 2019
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            color={DescriptionText[colorMode]}
            fontFamily="monospace"
            fontSize={{
              base: "xs",
              sm: "xs",
              md: "md",
            }}
            letterSpacing="-0.005rem"
          >
            It's one of the highest accolades of SP which aims to recognise the
            achievements and contributions of students in their Co-Curricular
            Activities or Non-Academic Projects. The awards affirm outstanding
            SP students who have shown efforts and made significant
            contributions towards the vibrancy of SP. Recipients of the awards
            are role-models who uphold the SP CORE values and qualities of SP
            Graduate Attributes.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModelStudentAward;
