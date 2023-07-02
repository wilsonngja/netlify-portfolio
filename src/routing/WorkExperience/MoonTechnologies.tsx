import {
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

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

  return (
    <Flex flex="1" borderRadius="md" paddingBottom={10}>
      <Card maxW={isLargeScreen ? "xs" : "sm"}>
        <CardBody>
          <Skeleton
            height={
              isLargeScreen ? "225px" : isVerySmallScreen ? "175px" : "300px"
            }
          ></Skeleton>
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
                  This internship is still in progress, please stay tune for
                  more updates.
                </Text>
              </>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default MoonTechnologies;
