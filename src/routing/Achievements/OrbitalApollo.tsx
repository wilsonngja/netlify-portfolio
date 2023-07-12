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
import OrbitalApolloImage from "../../assets/OrbitalApollo.png";

const OrbitalApollo = () => {
  const { colorMode } = useColorMode();
  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const isLargeScreenOnwards = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    "2xl": true,
  });

  const HeadingText = {
    dark: "teal.300",
    light: "blue.500",
  };

  const SubHeadingText = {
    dark: "green.300",
    light: "green.500",
  };

  const DescriptionText = {
    dark: "purple.100",
    light: "purple.800",
  };

  const is2XLLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": true,
  });

  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: false,
    "2xl": false,
  });

  const handleCardClick = () => {
    if (!isLargeScreenOnwards) {
      onOpen();
    }
  };

  return (
    <>
      <Card width="100%" height="100%" onClick={handleCardClick}>
        <CardHeader display="flex" justifyContent="center" paddingBottom={0}>
          <Image src={OrbitalApolloImage} borderRadius="lg" boxSize="275px" />
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
            Orbital - Apollo 11 (Advanced)
          </Text>
          <Text
            fontSize={
              isLargeScreen
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
            (August 2022)
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
                Awarded to student that examplifies applications with good set
                of core features and extensions while demostrating some effort
                in following good software engineering practices and principles
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
        <ModalOverlay backdropFilter="blur(1px)" />
        <ModalContent>
          <ModalHeader overflow="hidden">
            <Image src={OrbitalApolloImage} borderRadius="lg" />
            <Text
              fontSize={{
                base: "md",
                sm: "md",
                md: "xl",
              }}
              fontFamily="monospace"
              paddingTop={2}
              color={HeadingText[colorMode]}
            >
              Orbital - Apollo 11 (Advanced)
            </Text>
            <Text
              fontSize={{
                base: "0.95rem",
                sm: "0.95rem",
                md: "lg",
              }}
              fontFamily="monospace"
              color={SubHeadingText[colorMode]}
            >
              August 2022
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            color={DescriptionText[colorMode]}
            fontFamily="monospace"
            fontSize={{
              base: "sm",
              sm: "sm",
              md: "md",
            }}
            letterSpacing="-0.005rem"
          >
            Awarded to student that examplifies applications with good set of
            core features and extensions while demostrating some effort in
            following good software engineering practices and principles
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

export default OrbitalApollo;
