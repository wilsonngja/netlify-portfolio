import {
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import CSITInternshipPic from "../../assets/CSITInternship.jpg";

const CSIT = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex flex="1" borderRadius="md" paddingBottom={10}>
      <Card maxW={isLargeScreen ? "xs" : "sm"}>
        <CardBody>
          <Image src={CSITInternshipPic} borderRadius="lg" />
          <Stack marginTop={6} spacing={3}>
            <Heading fontSize={isLargeScreen ? "lg" : "xl"}>
              Software Engineer Intern @ CSIT
            </Heading>
            <Heading fontSize="md" textTransform="uppercase">
              March 2019 - June 2019
            </Heading>
            {isLargeScreen && (
              <>
                <Divider />
                <Text>
                  An internship done after graduating from polytechnic while
                  waiting for enlistmnet. This internship is done as a
                  fulfilment of a CSIT Diploma Scholar which develops the skils
                  in Python, Web Scrapping and Data Cleaning.
                </Text>
              </>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default CSIT;
