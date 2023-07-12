import {
  Center,
  Grid,
  GridItem,
  Icon,
  Link,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const FooterBar = () => {
  const { colorMode } = useColorMode();

  const FooterBackgroundColor = {
    dark: "gray.900",
    light: "blackAlpha.700",
  };

  const FooterBorderColor = {
    dark: "cyan.400",
    light: "blue.600",
  };

  const FooterFontColor = {
    dark: "cyan.400",
    light: "teal.100",
  };

  const isSmallAndMidScreen = useBreakpointValue({
    base: false,
    sm: true,
    md: true,
    lg: false,
    xl: false,
    "2xl": false,
  });

  return (
    <Grid
      bgColor={FooterBackgroundColor[colorMode]}
      borderTop="2px"
      borderColor={FooterBorderColor[colorMode]}
      height="fit-content"
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(3,1fr)",
        "2xl": "repeat(3, 1fr)",
      }}
      justifyItems="center"
    >
      <GridItem display="flex" alignContent="center" paddingY={1}>
        <Center
          color={FooterFontColor[colorMode]}
          fontWeight="semibold"
          fontSize={{
            base: "xs",
            sm: "xs",
            md: "0.8rem",
            lg: "sm",
            xl: "md",
            "2xl": "md",
          }}
        >
          Powered by: ReactJS{" "}
          <Icon as={FaReact} marginLeft={2} boxSize="20px" />
        </Center>
      </GridItem>

      <GridItem display="flex" alignContent="center" paddingY={1}>
        <Center>
          <Text
            color={FooterFontColor[colorMode]}
            fontWeight="semibold"
            fontSize={{
              base: "xs",
              sm: "xs",
              md: "0.8rem",
              lg: "sm",
              xl: "md",
              "2xl": "md",
            }}
          >
            Made by:{" "}
            <Link
              href="https://www.instagram.com/wilsonngja/"
              isExternal
              _hover={{ color: "orange.300" }}
            >
              @wilsonngja
            </Link>
          </Text>
        </Center>
      </GridItem>

      {isSmallAndMidScreen ? (
        <GridItem display="flex" alignContent="center" colSpan={2} paddingY={1}>
          <Center>
            <Icon
              as={AiFillCopyrightCircle}
              color={FooterFontColor[colorMode]}
            />
            <Text
              marginLeft={2}
              color={FooterFontColor[colorMode]}
              fontWeight="semibold"
              fontSize={{
                base: "xs",
                sm: "xs",
                md: "0.8rem",
                lg: "sm",
                xl: "md",
                "2xl": "md",
              }}
            >
              Copyright 2023 - Wilson Ng Jing An
            </Text>
          </Center>
        </GridItem>
      ) : (
        <GridItem display="flex" alignContent="center" paddingY={2}>
          <Center>
            <Icon
              as={AiFillCopyrightCircle}
              color={FooterFontColor[colorMode]}
            />
            <Text
              marginLeft={2}
              color={FooterFontColor[colorMode]}
              fontWeight="semibold"
              fontSize={{
                base: "xs",
                sm: "xs",
                md: "0.8rem",
                lg: "sm",
                xl: "md",
                "2xl": "md",
              }}
            >
              Copyright 2023 - Wilson Ng Jing An
            </Text>
          </Center>
        </GridItem>
      )}
    </Grid>
  );
};

export default FooterBar;
