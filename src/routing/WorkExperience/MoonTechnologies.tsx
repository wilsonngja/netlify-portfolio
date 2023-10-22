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
import { useState } from "react";
import ThinkAboutIt from "../../assets/MoonInternshipPhoto.jpg";
import MoonInternshipTag from "./MoonInternshipTag";

const MoonTechnologies = () => {
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayOne = () => <ModalOverlay backdropFilter="blur(10px)" />;
  const [overlay, setOverlay] = useState(<OverlayOne />);
  return (
    <Box height="100%">
      <Flex flex="1" borderRadius="md" paddingBottom={10}>
        <Card
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
          cursor="pointer"
          height="100%"
        >
          <CardBody>
            <Image src={ThinkAboutIt} borderRadius="lg" />
            <Stack marginTop={6} spacing={3}>
              <Heading
                fontSize={
                  isLargeScreen ? "lg" : isVerySmallScreen ? "0.85rem" : "xl"
                }
                color={HeadingText[colorMode]}
                fontFamily="monospace"
              >
                BCI Engineering Intern @<br />
                Moon Technologies Pte Ltd
              </Heading>
              <Heading
                fontSize={
                  isLargeScreen ? "sm" : isVerySmallScreen ? "0.8rem" : "md"
                }
                textTransform="uppercase"
                color={DateText[colorMode]}
                fontFamily="monospace"
              >
                June 2023 - August 2023
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
                    During the summer of 2023, I've done my internship with Moon
                    Technologies as an BCI Engineering Intern. Through this
                    internship, I was given the opportunity to experience with
                    several BCI technologies and able to harness my engineering
                    skill.
                  </Text>
                </>
              )}
            </Stack>
            <Divider paddingY={2} />
            <HStack paddingTop={4} align="flex-end">
              <Text
                color={TagText[colorMode]}
                fontFamily="monospace"
                fontSize="0.95rem"
                letterSpacing="-0.005rem"
              >
                Tags:
              </Text>
              <MoonInternshipTag />
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
            <Image src={ThinkAboutIt} borderRadius="lg" />
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
            This internship was done during the 3 month Summer Holiday in 2023.
            As a BCI Engineering Intern, I was task to perform test on a ECG
            sensor and identify the similarities when doing signal processing.
            After acquiring the patterns in an ECG sensor, I proceeded to
            acquire some of the signals using a dedicated EEG sensor. Through
            various permutations, my team and I identified the configuration
            that renders the best results. We proceeded to collect some of the
            data on Arduino Nano before moving towards processing the signals.
            Some validations has also been made after the signal processing by
            performing testing of being in relaxed and concentrated state. After
            the result was proven to be replicable, my partner and I proceeded
            to process and acquire the signal in real time.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MoonTechnologies;
