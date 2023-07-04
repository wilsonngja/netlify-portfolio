import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import NaganoInternshipPic from "../../assets/NaganoInternshipPicture.jpg";
import NaganoInternshipTags from "./NaganoInternshipTags";
import NaganoModalPic from "../../assets/NaganoModalPic.jpg";
import { useState } from "react";

const NaganoInternship = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    "2xl": true,
  });

  const { colorMode } = useColorMode();
  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayOne = () => <ModalOverlay backdropFilter="blur(10px)" />;

  const [overlay, setOverlay] = useState(<OverlayOne />);
  const HeadingText = {
    dark: "teal.300",
    light: "blue.500",
  };

  const DateText = {
    dark: "pink.200",
    light: "green.600",
  };

  const DescriptionText = {
    dark: "purple.100",
    light: "purple.800",
  };

  const TagText = {
    dark: "blue.200",
    light: "blue.800",
  };

  return (
    <>
      <Flex flex="1" borderRadius="md" paddingBottom={10}>
        <Card
          maxW={isLargeScreen ? "xs" : "sm"}
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
          cursor="pointer"
        >
          <CardBody>
            <Image src={NaganoInternshipPic} borderRadius="lg" />
            <Stack marginTop={6} spacing={3}>
              <Heading
                fontSize={
                  isLargeScreen ? "lg" : isVerySmallScreen ? "0.85rem" : "xl"
                }
                color={HeadingText[colorMode]}
                fontFamily="monospace"
              >
                Embedded System Engineer @ Nagano College of Technology
              </Heading>
              <Heading
                fontSize={
                  isLargeScreen ? "sm" : isVerySmallScreen ? "0.8rem" : "md"
                }
                textTransform="uppercase"
                color={DateText[colorMode]}
                fontFamily="monospace"
              >
                September 2017 - October 2017
              </Heading>
              {isLargeScreen && (
                <>
                  <Divider />
                  <Text
                    color={DescriptionText[colorMode]}
                    fontFamily="monospace"
                    fontSize="0.95rem"
                    letterSpacing="-0.005rem"
                  >
                    This internship was done during the 6 weeks semester break
                    in the 2nd year of polytechnic. The internship requires
                    rendering assistance to student in the projects and requires
                    knowledge in Java and Raspberry Pi.
                  </Text>
                </>
              )}
            </Stack>
            <Divider paddingY={2} />
            <HStack paddingTop={4}>
              <Text
                color={TagText[colorMode]}
                fontFamily="monospace"
                fontSize="0.95rem"
                letterSpacing="-0.005rem"
              >
                Tags:
              </Text>
              <NaganoInternshipTags />
            </HStack>
          </CardBody>
        </Card>
      </Flex>

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
      >
        {overlay}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader overflow="hidden">
            <Image src={NaganoModalPic} borderRadius="lg" />
            <Text
              fontSize={{
                base: "sm",
                sm: "sm",
                md: "md",
                lg: "lg",
                xl: "xl",
                "2xl": "2xl",
              }}
              fontFamily="monospace"
              paddingTop={2}
              color={HeadingText[colorMode]}
            >
              Embedded System Engineer @ Nagano College of Technology
            </Text>
            <Text
              fontSize={{
                base: "xs",
                sm: "xs",
                md: "sm",
                lg: "md",
                xl: "lg",
                "2xl": "lg",
              }}
              fontFamily="monospace"
              color={DateText[colorMode]}
            >
              September 2017 - October 2017
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            color={DescriptionText[colorMode]}
            fontFamily="monospace"
            fontSize={{
              base: "xs",
              sm: "xs",
              md: "sm",
              lg: "0.9rem",
              xl: "0.925rem",
              "2xl": "0.95rem",
            }}
            letterSpacing="-0.005rem"
          >
            This internship was done during the 6 weeks semester break dated
            back in my 2nd year of polytechnic. This overseas internship has
            enabled me to broaden my prospect beyond the material from
            textbooks, allowing me to learn development in other platforms such
            as Raspberry Pi.
            <br />
            <br />
            During the internship, I was tasked to assist in 2 different
            projects. Firstly, I was able to render assistant in a Heat Stroke
            Detection Robot project where i programmed a 3-axis compass to
            provide accurate location in the form of latitude and longtitude.
            The second project i helped in was a Surveillance Camera project
            where i programmed a graphica user interface (GUI) to provide real
            time visualisation from the cameras. Both projects are developed in
            Java Language.
            <br />
            <br />
            Due to the short nature of the internship and the communication
            barrier, the achievement was limited. Nevertheless, it's still a
            fulfilling journey and I'm glad to have embarked on this overseas
            internship program.
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

export default NaganoInternship;
