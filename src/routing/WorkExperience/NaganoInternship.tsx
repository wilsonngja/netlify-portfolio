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
import NaganoInternshipPic from "../../assets/NaganoInternshipPicture.jpg";

const NaganoInternship = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex flex="1" borderRadius="md" paddingBottom={10}>
      <Card maxW={isLargeScreen ? "xs" : "sm"}>
        <CardBody>
          <Image src={NaganoInternshipPic} borderRadius="lg" />
          <Stack marginTop={6} spacing={3}>
            <Heading fontSize={isLargeScreen ? "lg" : "xl"}>
              Embedded System Engineer @ Nagano College of Technology
            </Heading>
            <Heading
              fontSize={isLargeScreen ? "sm" : "md"}
              textTransform="uppercase"
            >
              September 2017 - October 2017
            </Heading>
            {isLargeScreen && (
              <>
                <Divider />
                <Text>
                  This internship was done during the 6 weeks semester break in
                  the 2nd year of polytechnic. The internship requires rendering
                  assistance to student in the projects and requires knowledge
                  in Java and Raspberry Pi.
                </Text>
              </>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default NaganoInternship;
