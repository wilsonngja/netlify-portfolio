import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Icon,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { FaScrewdriver } from "react-icons/fa";

const DigitalDesign = () => {
  const { colorMode } = useColorMode();

  const SubTitleColor = {
    dark: "yellow.300",
    light: "orange.500",
  };

  const ModuleColor = {
    dark: "orange.300",
    light: "gray.600",
  };

  const GradeColor = {
    dark: "green.300",
    light: "cyan.500",
  };

  return (
    <Accordion allowToggle defaultIndex={[0]}>
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Stack direction="row" align="center" spacing={2}>
                  <Icon
                    as={isExpanded ? AiFillFolderOpen : AiFillFolder}
                    color={SubTitleColor[colorMode]}
                  />
                  <Text
                    fontSize={{
                      base: "lg",
                      sm: "lg",
                      md: "xl",
                      lg: "2xl",
                      xl: "xl",
                      "2xl": "2xl",
                    }}
                    fontFamily="monospace"
                    color={SubTitleColor[colorMode]}
                    fontWeight="550"
                  >
                    engineering
                  </Text>
                </Stack>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack
                direction="row"
                align="center"
                paddingLeft={{
                  base: 0,
                  sm: 0,
                  md: 4,
                  lg: 0,
                  xl: 4,
                  "2xl": 4,
                }}
                spacing={2}
                paddingBottom={1}
              >
                <Icon as={FaScrewdriver} color={ModuleColor[colorMode]} />
                <Text
                  fontSize={{
                    base: "xs",
                    sm: "md",
                    md: "lg",
                    lg: "md",
                    xl: "lg",
                    "2xl": "xl",
                  }}
                  fontFamily="monospace"
                  fontWeight="525"
                  color={ModuleColor[colorMode]}
                >
                  CG1111A: Engineering Principles And Practice 1{" "}
                  <Badge
                    color={GradeColor[colorMode]}
                    fontSize={{
                      base: "xs",
                      sm: "md",
                      md: "lg",
                      lg: "md",
                      xl: "lg",
                      "2xl": "xl",
                    }}
                  >
                    S
                  </Badge>
                </Text>
              </Stack>

              <Stack
                direction="row"
                align="center"
                paddingLeft={{
                  base: 0,
                  sm: 0,
                  md: 4,
                  lg: 0,
                  xl: 4,
                  "2xl": 4,
                }}
                spacing={2}
                paddingBottom={1}
              >
                <Icon as={FaScrewdriver} color={ModuleColor[colorMode]} />
                <Text
                  fontSize={{
                    base: "xs",
                    sm: "md",
                    md: "lg",
                    lg: "md",
                    xl: "lg",
                    "2xl": "xl",
                  }}
                  fontFamily="monospace"
                  fontWeight="525"
                  color={ModuleColor[colorMode]}
                >
                  CG2111A: Engineering Principles And Practice 2{" "}
                  <Badge
                    color={GradeColor[colorMode]}
                    fontSize={{
                      base: "xs",
                      sm: "md",
                      md: "lg",
                      lg: "md",
                      xl: "lg",
                      "2xl": "xl",
                    }}
                  >
                    A
                  </Badge>
                </Text>
              </Stack>

              <Stack
                direction="row"
                align="center"
                paddingLeft={{
                  base: 0,
                  sm: 0,
                  md: 4,
                  lg: 0,
                  xl: 4,
                  "2xl": 4,
                }}
              >
                <Icon as={FaScrewdriver} color={ModuleColor[colorMode]} />
                <Text
                  fontSize={{
                    base: "xs",
                    sm: "md",
                    md: "lg",
                    lg: "md",
                    xl: "lg",
                    "2xl": "xl",
                  }}
                  fontFamily="monospace"
                  fontWeight="525"
                  color={ModuleColor[colorMode]}
                >
                  EE2026: Digital Design{" "}
                  <Badge
                    color={GradeColor[colorMode]}
                    fontSize={{
                      base: "xs",
                      sm: "md",
                      md: "lg",
                      lg: "md",
                      xl: "lg",
                      "2xl": "xl",
                    }}
                  >
                    B
                  </Badge>
                </Text>
              </Stack>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default DigitalDesign;
