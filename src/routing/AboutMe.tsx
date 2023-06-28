import {
  useBreakpointValue,
  Grid,
  GridItem,
  Image,
  Text,
  Icon,
  Divider,
  HStack,
  Link,
  Tag,
  Box,
} from "@chakra-ui/react";
import profilePicture from "../assets/profilePicture.jpg";
import { FaTableTennis } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { MdCatchingPokemon } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Typed from "react-typed";
import { useState } from "react";

const AboutMe = () => {
  const handleRedirect = () => {
    const email = "wilsonngja@gmail.com";
    const mailtoUrl = `mailto:${email}`;

    window.location.href = mailtoUrl;
  };

  const headingStyle: React.CSSProperties = {
    color: "#B794F4",
    fontFamily: "monospace",
    fontWeight: "bold",
  };

  const isSmallScreen = useBreakpointValue({ base: true, sm: true, md: false });

  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/uc?export=download&id=1_2WUzJwCBIUJrQ_u_3joDPpwdRP-MvKX"; // Replace with the actual local file path

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Grid
      templateColumns={isSmallScreen ? "repeat(1, 1fr)" : "repeat(6, 1fr)"}
      paddingX={4}
      paddingY={4}
      gap={3}
    >
      {/* Side Panel */}
      <GridItem>
        <Grid templateColumns="repeat(1, 1fr)">
          <GridItem colSpan={1}>
            <Image
              src={profilePicture}
              borderRadius="full"
              borderWidth="4px"
              borderStyle="solid"
              borderColor="orange.200"
              height="100%"
            />
          </GridItem>
          <GridItem>
            <Text fontSize="2xl" paddingTop={4} fontWeight="semibold">
              Wilson NG Jing An
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xl" fontWeight="semibold">
              @wilsonngja
            </Text>
          </GridItem>

          <GridItem paddingTop={4}>
            <Text fontSize="lg">
              NUS Computer Engg <Icon as={RiComputerFill} />
            </Text>
            <Text fontSize="lg">
              Table Tennis Enthusiast <Icon as={FaTableTennis} />
            </Text>
            <Text fontSize="lg">
              Pokemon Lover <Icon as={MdCatchingPokemon} />
            </Text>
            <Divider paddingTop={3} />
          </GridItem>

          <GridItem paddingTop={4}>
            <HStack>
              <Icon as={AiFillGithub} fontSize="lg" />
              <Link
                href="https://github.com/wilsonngja"
                isExternal
                fontSize="lg"
              >
                @wilsonngja
              </Link>
            </HStack>
            <HStack>
              <Icon as={FaTelegramPlane} fontSize="lg" />
              <Text fontSize="lg">@wilsonngja</Text>
            </HStack>
            <HStack>
              <Icon as={AiFillLinkedin} fontSize="lg" />
              <Link
                href="https://www.linkedin.com/in/wilson-ng-jing-an/"
                isExternal
                fontSize="lg"
              >
                Link here!
              </Link>
            </HStack>
            <HStack>
              <Icon as={MdEmail} fontSize="lg" />
              <Link onClick={handleRedirect}>wilsonngja@gmail.com</Link>
            </HStack>
            <HStack>
              <Icon as={AiFillFilePdf} fontSize="lg" />
              <Link onClick={handleDownload}>My Resume Here</Link>
            </HStack>
          </GridItem>
        </Grid>
      </GridItem>

      <GridItem colSpan={5} paddingLeft={5}>
        <Text fontSize="2xl" fontFamily="monospace" marginX={4}>
          <Typed
            strings={["brief_introduction:"]}
            typeSpeed={50}
            style={headingStyle}
            showCursor={!isTypingComplete}
            onComplete={handleTypingComplete}
            cursorChar="|"
          />
        </Text>
        <Text fontSize="lg" fontFamily="monospace" marginX={4} paddingY={5}>
          My name is Wilson, and I'm currently in my final year of studying
          Computer Engineering at NUS. My interest in Computer Engineering began
          during my time at ITE when I extensively used Arduino to develop a
          functional product for my final year project.
          <br />
          <br /> Having followed a longer educational path, I strongly believe
          in the correlation between hard work and results. This belief serves
          as my motivation to dedicate effort to my daily pursuits and strive
          for the successful completion of assigned tasks. While I am still
          exploring various fields of interest, I am particularly fascinated by
          the advancements in the artificial intelligence domain.
          <br />
          <br />
          To maintain a healthy work-life balance, I actively engage in sports
          such as Table Tennis whenever possible. Participating in competitions
          during my time at polytechnic brought me great joy and fulfillment.
        </Text>
        <Text fontSize="2xl" fontFamily="monospace" marginX={4} marginTop={5}>
          <Typed
            strings={["my_skillset:"]}
            typeSpeed={50}
            style={headingStyle}
            showCursor={!isTypingComplete}
            onComplete={handleTypingComplete}
            cursorChar="|"
          />
        </Text>
        <Box paddingTop={5}>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="green.300"
            fontWeight="semibold"
          >
            C++
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="green.300"
            fontWeight="semibold"
          >
            C
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="green.300"
            fontWeight="semibold"
          >
            Java
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="green.300"
            fontWeight="semibold"
          >
            Python
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="orange.300"
            fontWeight="semibold"
          >
            Verilog
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="orange.300"
            fontWeight="semibold"
          >
            Assembly Language
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="orange.300"
            fontWeight="semibold"
          >
            Bare-Metal
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="orange.300"
            fontWeight="semibold"
          >
            Arduino
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="orange.300"
            fontWeight="semibold"
          >
            RTOS
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="cyan.300"
            fontWeight="semibold"
          >
            HTML
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="cyan.300"
            fontWeight="semibold"
          >
            CSS
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="cyan.300"
            fontWeight="semibold"
          >
            Svelte
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="cyan.300"
            fontWeight="semibold"
          >
            React
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="cyan.300"
            fontWeight="semibold"
          >
            Javascript
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="pink.300"
            fontWeight="semibold"
          >
            MongoDB
          </Tag>
          <Tag
            size="lg"
            variant="solid"
            color="black"
            marginX={4}
            marginY={3}
            bgColor="pink.300"
            fontWeight="semibold"
          >
            PostgreSQL
          </Tag>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default AboutMe;
