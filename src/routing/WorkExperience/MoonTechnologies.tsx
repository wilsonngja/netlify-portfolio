import {
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const MoonTechnologies = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex flex="1" borderRadius="md" paddingBottom={10}>
      <Card maxW={isLargeScreen ? "xs" : "sm"}>
        <CardBody>
          <Skeleton height={isLargeScreen ? "225px" : "300px"}></Skeleton>
          <Stack marginTop={6} spacing={3}>
            <Heading fontSize={isLargeScreen ? "lg" : "xl"}>
              BCI Engineering Intern @<br />
              Moon Technologies Pte Ltd
            </Heading>
            <Heading fontSize="md" textTransform="uppercase">
              June 2023 - August 2023
            </Heading>
            {isLargeScreen && (
              <>
                <Divider />
                <Text>
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
