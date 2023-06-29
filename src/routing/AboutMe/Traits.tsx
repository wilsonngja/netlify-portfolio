import { Icon, useMediaQuery, Text, Center } from "@chakra-ui/react";
import { FaTableTennis } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";

const Traits = () => {
  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");

  if (isVerySmallScreen) {
    return (
      <>
        <Center>
          <Text fontSize="sm" paddingTop={2}>
            NUS Computer Engg <Icon as={RiComputerFill} />
          </Text>
        </Center>
        <Center>
          <Text fontSize="sm">
            Table Tennis Enthusiast <Icon as={FaTableTennis} />
          </Text>
        </Center>
        <Center>
          <Text fontSize="sm">
            Pokemon Lover <Icon as={MdCatchingPokemon} />
          </Text>
        </Center>
      </>
    );
  } else {
    return (
      <>
        <Text
          fontSize={{ sm: "sm", md: "md", lg: "md", xl: "lg", "2xl": "xl" }}
        >
          NUS Computer Engg{" "}
          <Icon
            as={RiComputerFill}
            fontSize={{ md: "xl", lg: "lg", xl: "lg", "2xl": "lg" }}
          />
        </Text>
        <Text
          fontSize={{ sm: "sm", md: "md", lg: "md", xl: "lg", "2xl": "xl" }}
        >
          Table Tennis Enthusiast{" "}
          <Icon
            as={FaTableTennis}
            fontSize={{ md: "xl", lg: "lg", xl: "lg", "2xl": "lg" }}
          />
        </Text>
        <Text
          fontSize={{ sm: "sm", md: "md", lg: "md", xl: "lg", "2xl": "xl" }}
        >
          Pokemon Lover{" "}
          <Icon
            as={MdCatchingPokemon}
            fontSize={{ md: "xl", lg: "lg", xl: "lg", "2xl": "lg" }}
          />
        </Text>
      </>
    );
  }
};

export default Traits;
