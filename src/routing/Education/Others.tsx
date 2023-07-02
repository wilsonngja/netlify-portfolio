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
import { AiFillFolderOpen, AiFillFolder } from "react-icons/ai";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";

const Others = () => {
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
                    others
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
                <Icon
                  as={BsFillFileEarmarkCheckFill}
                  color={ModuleColor[colorMode]}
                />
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
                  MA1511: Engineering Calculus{" "}
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
                    B+
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
                <Icon
                  as={BsFillFileEarmarkCheckFill}
                  color={ModuleColor[colorMode]}
                />
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
                  MA1512: Differential Equations For Engineering{" "}
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
                    B+
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
                <Icon
                  as={BsFillFileEarmarkCheckFill}
                  color={ModuleColor[colorMode]}
                />
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
                  IE2141: Systems Thinking And Dynamics{" "}
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
                <Icon
                  as={BsFillFileEarmarkCheckFill}
                  color={ModuleColor[colorMode]}
                />
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
                  PF1101: Fundamentals Of Project Management{" "}
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
                <Icon
                  as={BsFillFileEarmarkCheckFill}
                  color={ModuleColor[colorMode]}
                />
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
                  EG2501: Liveable Cities{" "}
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
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default Others;
