import { Box, Tag } from "@chakra-ui/react";

const NaganoInternshipTags = () => {
  return (
    <Box>
      <Tag
        variant="solid"
        bgColor="green.300"
        fontWeight="semibold"
        color="black"
        marginRight={2}
      >
        Java
      </Tag>
      <Tag
        variant="solid"
        bgColor="orange.300"
        fontWeight="semibold"
        color="black"
        marginRight={2}
      >
        Raspberry Pi
      </Tag>
    </Box>
  );
};

export default NaganoInternshipTags;
