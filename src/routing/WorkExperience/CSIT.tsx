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
import CSITInternshipPic from "../../assets/CSITInternship.jpg";
import CSITInternshipTags from "./CSITInternshipTags";
import CSITModalPic from "../../assets/CSITModalPic.jpg";
import { useState } from "react";

const CSIT = () => {
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
    light: "blue.700",
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
            <Image src={CSITInternshipPic} borderRadius="lg" />
            <Stack marginTop={6} spacing={3}>
              <Heading
                fontSize={
                  isLargeScreen ? "lg" : isVerySmallScreen ? "0.85rem" : "xl"
                }
                color={HeadingText[colorMode]}
                fontFamily="monospace"
              >
                Software Engineer Intern @ CSIT
              </Heading>
              <Heading
                fontSize={
                  isLargeScreen ? "sm" : isVerySmallScreen ? "0.8rem" : "md"
                }
                textTransform="uppercase"
                color={DateText[colorMode]}
                fontFamily="monospace"
              >
                March 2019 - June 2019
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
                    After graduating from polytechnic and before enlisting for
                    national service, I undertake this internship as part of the
                    CSIT Diploma Scholar program. The internship aims to develop
                    skills in Python programming, web scraping, and data
                    cleaning.
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
              <CSITInternshipTags />
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
            <Image src={CSITModalPic} borderRadius="lg" />
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
            I had the opportunity to complete my internship at CSIT as a
            Software Engineer Intern, and it was an incredibly enjoyable
            experience. The project I worked on required prior knowledge of
            Python, and I was given sufficient time to acquire the necessary
            skills.
            <br />
            <br />
            During my internship, I was assigned to a Data Visualization project
            that involved tasks such as Data Cleaning, Web Scraping, and Entity
            Abstraction. I received excellent guidance and mentoring from my
            supervisor, who also provided valuable advice regarding my
            university education.
            <br />
            <br />
            The duration of the internship was adequate for me to develop a
            strong interest in the software engineering field and gain a real
            taste of what it's like to work as a software engineer. I am
            grateful for the opportunity to serve a three-month internship at
            CSIT.
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

export default CSIT;
