import {
  Box,
  Image,
  Step,
  StepDescription,
  StepSeparator,
  StepTitle,
  Stepper,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import CSITLogo from "../../assets/CSITLogo.jpg";
import MoonTechLogo from "../../assets/MoonTechnologies.jpeg";

type Props = {
  onVariableChange: (newValue: number) => void;
};

const WorkExperienceNav = ({ onVariableChange }: Props) => {
  const [, setValue] = useState(0);

  const isXLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
    "2xl": true,
  });

  const steps = [
    {
      title: "Centre Strategic for Infocomm Technologies",
      description: "Mar 2019 to Jun 2019",
      logo: CSITLogo,
      clickFunction: () => {
        setValue(1);
        onVariableChange(1);
      },
    },

    {
      title: "Moon Technologies",
      description: "Jun 2023 to Aug 2023",
      logo: MoonTechLogo,
      clickFunction: () => {
        setValue(3);
        onVariableChange(3);
      },
    },
  ];

  return (
    <Stepper size="lg" index={0} paddingX={10}>
      {steps.map((step, index) => (
        <Step key={index}>
          <Image
            src={step.logo}
            boxSize="50px"
            onClick={step.clickFunction}
            borderRadius="lg"
          />

          {isXLargeScreen && (
            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
          )}
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default WorkExperienceNav;
