import {
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
import { useState } from "react";
import NaganoInternshipPic from "../../assets/NaganoInternshipPicture.jpg";
import NaganoModalPic from "../../assets/NaganoModalPic.jpg";
import NaganoInternshipTags from "./NaganoInternshipTags";

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
            <Stack marginTop={5} spacing={3}>
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
                    fontSize="0.9rem"
                    letterSpacing="-0.005rem"
                  >
                    During the six-week semester break in my second year of
                    polytechnic, I engaged in an internship that involved
                    providing support to students working on projects. The
                    internship specifically required proficiency in Java and
                    Raspberry Pi.
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
        motionPreset="slideInBottom"
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
            I participated in an internship during my six-week semester break in
            my second year of polytechnic. This overseas internship provided me
            with valuable opportunities to expand my knowledge beyond what I
            learned from textbooks and allowed me to explore development on
            different platforms, such as Raspberry Pi.
            <br />
            <br />
            During the internship, I contributed to two distinct projects. In
            the first project, I assisted with a Heat Stroke Detection Robot. My
            responsibilities included programming a 3-axis compass to accurately
            determine the robot's location in terms of latitude and longitude.
            The second project involved a Surveillance Camera system where I
            developed a graphical user interface (GUI) to provide real-time
            visualization from the cameras. Both projects were implemented using
            the Java programming language.
            <br />
            <br />
            Although the internship was relatively short, and there were some
            communication barriers, I still found it to be a rewarding
            experience. Despite the limitations, I am grateful for the journey
            and the opportunity to participate in this overseas internship
            program.
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
