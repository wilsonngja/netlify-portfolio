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
  VStack,
  Center,
  useMediaQuery,
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

  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");
  const [isMidSmallScreen] = useMediaQuery("(min-width: 610px");
  // const isVerySmallScreen = useBreakpointValue({ base: true, sm: false });
  const isSmallScreen = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
  });
  const isMediumScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: false,
    xl: false,
    "2xl": false,
  });

  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: false,
    "2xl": false,
  });

  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/uc?export=download&id=1_2WUzJwCBIUJrQ_u_3joDPpwdRP-MvKX";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isVerySmallScreen) {
    return (
      <Grid templateColumns="repeat(1, 1fr)" paddingX={4} paddingY={4}>
        <Center>
          <Image
            src={profilePicture}
            borderRadius="full"
            borderWidth="4px"
            borderStyle="solid"
            borderColor="orange.200"
            boxSize="150px"
          />
        </Center>
        <Center>
          <Text fontSize="lg" fontWeight="medium" alignItems="top">
            Wilson NG Jing An
          </Text>
        </Center>
        <Center>
          <Text fontSize="sm" fontWeight="medium" letterSpacing="0.025em">
            (@wilsonngja)
          </Text>
        </Center>
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
        <Divider paddingTop={2} />
        <Text fontSize="xl" fontFamily="monospace" marginX={1} paddingTop={4}>
          <Typed
            strings={["introduction:"]}
            typeSpeed={50}
            style={headingStyle}
            showCursor={!isTypingComplete}
            onComplete={handleTypingComplete}
            cursorChar="|"
          />
        </Text>
        <Text fontSize="sm" fontFamily="monospace" marginX={1} paddingY={3}>
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
        <Divider />
        <Text fontSize="xl" fontFamily="monospace" marginX={1} marginTop={5}>
          <Typed
            strings={["my_skillset:"]}
            typeSpeed={50}
            style={headingStyle}
            showCursor={!isTypingComplete}
            onComplete={handleTypingComplete}
            cursorChar="|"
          />
        </Text>
        <Box paddingTop={2}>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="green.300"
            fontWeight="semibold"
          >
            C++
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="green.300"
            fontWeight="semibold"
          >
            C
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="green.300"
            fontWeight="semibold"
          >
            Java
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="green.300"
            fontWeight="semibold"
          >
            Python
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="orange.300"
            fontWeight="semibold"
          >
            Verilog
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="orange.300"
            fontWeight="semibold"
          >
            Assembly Language
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="orange.300"
            fontWeight="semibold"
          >
            Bare-Metal
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="orange.300"
            fontWeight="semibold"
          >
            Arduino
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="orange.300"
            fontWeight="semibold"
          >
            RTOS
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="cyan.300"
            fontWeight="semibold"
          >
            HTML
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="cyan.300"
            fontWeight="semibold"
          >
            CSS
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="cyan.300"
            fontWeight="semibold"
          >
            Svelte
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="cyan.300"
            fontWeight="semibold"
          >
            React
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="cyan.300"
            fontWeight="semibold"
          >
            Javascript
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="pink.300"
            fontWeight="semibold"
          >
            MongoDB
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="pink.300"
            fontWeight="semibold"
          >
            PostgreSQL
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="purple.300"
            fontWeight="semibold"
          >
            Git
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="purple.300"
            fontWeight="semibold"
          >
            TailwindCSS
          </Tag>
          <Tag
            size="md"
            variant="solid"
            color="black"
            marginX={1}
            marginY={3}
            bgColor="purple.300"
            fontWeight="semibold"
          >
            Bootstrap
          </Tag>
        </Box>
        <Divider />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <HStack paddingTop={2}>
            <>
              <Icon as={AiFillGithub} fontSize="md" />
              <Link
                href="https://github.com/wilsonngja"
                isExternal
                fontSize="md"
              >
                @wilsonngja
              </Link>
            </>
            <HStack paddingLeft={3}>
              <Icon as={FaTelegramPlane} fontSize="md" />
              <Text fontSize="md">@wilsonngja</Text>
            </HStack>
          </HStack>

          <HStack>
            <HStack>
              <Icon as={MdEmail} fontSize="md" />
              <Link onClick={handleRedirect}>wilsonngja@gmail.com</Link>
            </HStack>
            <Icon as={AiFillLinkedin} fontSize="md" />
            <Link
              href="https://www.linkedin.com/in/wilson-ng-jing-an/"
              isExternal
              fontSize="md"
            >
              Link here!
            </Link>
          </HStack>
          <HStack>
            <Icon as={AiFillFilePdf} fontSize="md" />
            <Link onClick={handleDownload}>My Resume Here</Link>
          </HStack>
        </Box>
      </Grid>
    );
  } else if (isSmallScreen) {
    return (
      <Grid
        templateColumns="repeat(1, 1fr)"
        paddingX={4}
        paddingY={4}
        alignContent="center"
        justifyItems="center"
      >
        <GridItem>
          {/* <Grid templateColumns="repeat(2, 1fr)" alignItems="flex-start"> */}
          <HStack>
            <Image
              src={profilePicture}
              borderRadius="full"
              borderWidth="4px"
              borderStyle="solid"
              borderColor="orange.200"
              boxSize="150px"
              justifySelf="left"
              alignSelf="left"
            />
            <VStack align="left" spacing={0} paddingX={4}>
              <Text
                fontSize="sm"
                fontWeight="medium"
                alignItems="top"
                letterSpacing="0.025em"
              >
                Wilson NG Jing An
              </Text>
              <Text fontSize="sm" fontWeight="medium" letterSpacing="0.025em">
                @wilsonngja
              </Text>
              <Text fontSize="sm" paddingTop={5}>
                NUS Computer Engg <Icon as={RiComputerFill} />
              </Text>
              <Text fontSize="sm">
                Table Tennis Enthusiast <Icon as={FaTableTennis} />
              </Text>
              <Text fontSize="sm">
                Pokemon Lover <Icon as={MdCatchingPokemon} />
              </Text>
            </VStack>
            {isMidSmallScreen && (
              <VStack align="center">
                <HStack paddingTop={2}>
                  <Icon as={AiFillGithub} fontSize="sm" />
                  <Link
                    href="https://github.com/wilsonngja"
                    isExternal
                    fontSize="xs"
                  >
                    @wilsonngja
                  </Link>
                </HStack>
                <HStack paddingLeft={3}>
                  <Icon as={FaTelegramPlane} fontSize="sm" />
                  <Text fontSize="xs">@wilsonngja</Text>
                </HStack>
                <HStack>
                  <Icon as={MdEmail} fontSize="sm" />
                  <Link onClick={handleRedirect} fontSize="xs">
                    wilsonngja@gmail.com
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={AiFillLinkedin} fontSize="sm" />
                  <Link
                    href="https://www.linkedin.com/in/wilson-ng-jing-an/"
                    isExternal
                    fontSize="xs"
                  >
                    Link here!
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={AiFillFilePdf} fontSize="sm" />
                  <Link onClick={handleDownload} fontSize="xs">
                    My Resume Here
                  </Link>
                </HStack>
              </VStack>
            )}
          </HStack>
          {/* </Grid> */}
        </GridItem>
        <Divider paddingTop={3} />
        <GridItem>
          <Text fontSize="xl" fontFamily="monospace" marginX={1} paddingTop={4}>
            <Typed
              strings={["introduction:"]}
              typeSpeed={50}
              style={headingStyle}
              showCursor={!isTypingComplete}
              onComplete={handleTypingComplete}
              cursorChar="|"
            />
          </Text>
          <Text fontSize="sm" fontFamily="monospace" marginX={1} paddingY={3}>
            My name is Wilson, and I'm currently in my final year of studying
            Computer Engineering at NUS. My interest in Computer Engineering
            began during my time at ITE when I extensively used Arduino to
            develop a functional product for my final year project.
            <br />
            <br /> Having followed a longer educational path, I strongly believe
            in the correlation between hard work and results. This belief serves
            as my motivation to dedicate effort to my daily pursuits and strive
            for the successful completion of assigned tasks. While I am still
            exploring various fields of interest, I am particularly fascinated
            by the advancements in the artificial intelligence domain.
            <br />
            <br />
            To maintain a healthy work-life balance, I actively engage in sports
            such as Table Tennis whenever possible. Participating in
            competitions during my time at polytechnic brought me great joy and
            fulfillment.
          </Text>
          <Divider />
        </GridItem>

        {/* Skillset */}
        <GridItem>
          <Text fontSize="xl" fontFamily="monospace" marginX={1} marginTop={5}>
            <Typed
              strings={["my_skillset:"]}
              typeSpeed={50}
              style={headingStyle}
              showCursor={!isTypingComplete}
              onComplete={handleTypingComplete}
              cursorChar="|"
            />
          </Text>
          <Box paddingTop={2}>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="green.300"
              fontWeight="semibold"
            >
              C++
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="green.300"
              fontWeight="semibold"
            >
              C
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="green.300"
              fontWeight="semibold"
            >
              Java
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="green.300"
              fontWeight="semibold"
            >
              Python
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="orange.300"
              fontWeight="semibold"
            >
              Verilog
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="orange.300"
              fontWeight="semibold"
            >
              Assembly Language
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="orange.300"
              fontWeight="semibold"
            >
              Bare-Metal
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="orange.300"
              fontWeight="semibold"
            >
              Arduino
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="orange.300"
              fontWeight="semibold"
            >
              RTOS
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="cyan.300"
              fontWeight="semibold"
            >
              HTML
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="cyan.300"
              fontWeight="semibold"
            >
              CSS
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="cyan.300"
              fontWeight="semibold"
            >
              Svelte
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="cyan.300"
              fontWeight="semibold"
            >
              React
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="cyan.300"
              fontWeight="semibold"
            >
              Javascript
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="pink.300"
              fontWeight="semibold"
            >
              MongoDB
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="pink.300"
              fontWeight="semibold"
            >
              PostgreSQL
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="purple.300"
              fontWeight="semibold"
            >
              Git
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="purple.300"
              fontWeight="semibold"
            >
              TailwindCSS
            </Tag>
            <Tag
              size="md"
              variant="solid"
              color="black"
              marginX={1}
              marginY={3}
              bgColor="purple.300"
              fontWeight="semibold"
            >
              Bootstrap
            </Tag>
          </Box>
          <Divider paddingTop={2} />
        </GridItem>

        {/* Contact Information */}
        {!isMidSmallScreen && (
          <>
            <HStack paddingTop={2}>
              <Icon as={AiFillGithub} fontSize="md" />
              <Link
                href="https://github.com/wilsonngja"
                isExternal
                fontSize="md"
              >
                @wilsonngja
              </Link>
              <HStack paddingLeft={3}>
                <Icon as={FaTelegramPlane} fontSize="md" />
                <Text fontSize="md">@wilsonngja</Text>
              </HStack>
            </HStack>

            <HStack>
              <HStack>
                <Icon as={MdEmail} fontSize="md" />
                <Link onClick={handleRedirect}>wilsonngja@gmail.com</Link>
              </HStack>
              <Icon as={AiFillLinkedin} fontSize="md" />
              <Link
                href="https://www.linkedin.com/in/wilson-ng-jing-an/"
                isExternal
                fontSize="md"
              >
                Link here!
              </Link>
            </HStack>
            <HStack>
              <Icon as={AiFillFilePdf} fontSize="md" />
              <Link onClick={handleDownload}>My Resume Here</Link>
            </HStack>
          </>
        )}
        <Divider paddingTop={2} />
      </Grid>
    );
  } else {
    return (
      <Grid templateColumns="repeat(7, 1fr)" paddingX={4} paddingY={4}>
        {/* Side Panel */}
        <GridItem colSpan={1}>
          <Grid templateColumns="repeat(1, 1fr)">
            <GridItem colSpan={1}>
              <Image
                src={profilePicture}
                borderRadius="full"
                borderWidth="4px"
                borderStyle="solid"
                borderColor="orange.200"
                boxSize={
                  isMediumScreen ? "150px" : isLargeScreen ? "220px" : "240px"
                }
              />
            </GridItem>

            <GridItem>
              <Text
                fontSize={{ md: "lg", lg: "xl", xl: "2xl", "2xl": "3xl" }}
                paddingTop={4}
                fontWeight="semibold"
              >
                Wilson NG Jing An
              </Text>
            </GridItem>
            <GridItem>
              <Text
                fontSize={{ md: "md", lg: "xl", xl: "2xl", "2xl": "2xl" }}
                fontWeight="semibold"
              >
                @wilsonngja
              </Text>
            </GridItem>
            <GridItem paddingTop={4}>
              <Text fontSize={{ md: "sm", lg: "md", xl: "lg", "2xl": "xl" }}>
                NUS Computer Engg <Icon as={RiComputerFill} fontSize="lg" />
              </Text>
              <Text fontSize={{ md: "sm", lg: "md", xl: "lg", "2xl": "xl" }}>
                Table Tennis Enthusiast{" "}
                <Icon as={FaTableTennis} fontSize="lg" />
              </Text>
              <Text fontSize={{ md: "sm", lg: "md", xl: "lg", "2xl": "xl" }}>
                Pokemon Lover <Icon as={MdCatchingPokemon} fontSize="lg" />
              </Text>
              <Divider paddingTop={3} />
            </GridItem>
            <GridItem paddingTop={4}>
              <HStack>
                <Icon
                  as={AiFillGithub}
                  fontSize={{ md: "lg", lg: "xl", xl: "2xl" }}
                />
                <Link
                  href="https://github.com/wilsonngja"
                  isExternal
                  fontSize={{ md: "sm", lg: "md", xl: "lg", "2xl": "xl" }}
                >
                  @wilsonngja
                </Link>
              </HStack>
              <HStack>
                <Icon
                  as={FaTelegramPlane}
                  fontSize={{ md: "lg", lg: "xl", xl: "2xl" }}
                />
                <Text fontSize={{ md: "sm", lg: "md", xl: "lg", "2xl": "xl" }}>
                  @wilsonngja
                </Text>
              </HStack>
              <HStack>
                <Icon
                  as={AiFillLinkedin}
                  fontSize={{ md: "lg", lg: "xl", xl: "2xl" }}
                />
                <Link
                  href="https://www.linkedin.com/in/wilson-ng-jing-an/"
                  isExternal
                  fontSize={{ md: "sm", lg: "md", xl: "lg", "2xl": "xl" }}
                >
                  Link here!
                </Link>
              </HStack>
              <HStack>
                <Icon
                  as={MdEmail}
                  fontSize={{ md: "lg", lg: "xl", xl: "2xl" }}
                />
                <Link
                  onClick={handleRedirect}
                  fontSize={{ md: "sm", lg: "md", xl: "lg", "2xl": "xl" }}
                >
                  wilsonngja@gmail.com
                </Link>
              </HStack>
              <HStack>
                <Icon
                  as={AiFillFilePdf}
                  fontSize={{ md: "lg", lg: "xl", xl: "2xl" }}
                />
                <Link
                  onClick={handleDownload}
                  fontSize={{ md: "sm", lg: "md", xl: "lg", "2xl": "xl" }}
                >
                  My Resume Here
                </Link>
              </HStack>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem colSpan={6} paddingLeft={{ md: 3, lg: 5 }}>
          <Text
            fontSize={{ md: "xl", lg: "2xl", xl: "3xl", "2xl": "4xl" }}
            fontFamily="monospace"
            marginX={2}
          >
            <Typed
              strings={["introduction:"]}
              typeSpeed={50}
              style={headingStyle}
              showCursor={!isTypingComplete}
              onComplete={handleTypingComplete}
              cursorChar="|"
            />
          </Text>
          <Text
            fontSize={{ md: "12.5px", lg: "md", xl: "lg", "2xl": "2xl" }}
            fontFamily="monospace"
            marginX={2}
            paddingY={2}
            letterSpacing="0.0005rem"
          >
            My name is Wilson, and I'm currently in my final year of studying
            Computer Engineering at NUS. My interest in Computer Engineering
            began during my time at ITE when I extensively used Arduino to
            develop a functional product for my final year project.
            <br />
            <br /> Having followed a longer educational path, I strongly believe
            in the correlation between hard work and results. This belief serves
            as my motivation to dedicate effort to my daily pursuits and strive
            for the successful completion of assigned tasks. While I am still
            exploring various fields of interest, I am particularly fascinated
            by the advancements in the artificial intelligence domain.
            <br />
            <br />
            To maintain a healthy work-life balance, I actively engage in sports
            such as Table Tennis whenever possible. Participating in
            competitions during my time at polytechnic brought me great joy and
            fulfillment.
          </Text>
          <Text
            fontSize={{ md: "xl", lg: "2xl", xl: "3xl", "2xl": "4xl" }}
            fontFamily="monospace"
            marginX={2}
            marginTop={3}
          >
            <Typed
              strings={["my_skillset:"]}
              typeSpeed={50}
              style={headingStyle}
              showCursor={!isTypingComplete}
              onComplete={handleTypingComplete}
              cursorChar="|"
            />
          </Text>
          <Box paddingTop={2}>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="green.300"
              fontWeight="semibold"
              fontSize={{ md: "lg", lg: "xl", xl: "xl", "2xl": "2xl" }}
            >
              C++
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="green.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              C
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="green.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              Java
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="green.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              Python
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="orange.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              Verilog
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="orange.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              Assembly Language
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="orange.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              Bare-Metal
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 2, lg: 3 }}
              bgColor="orange.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              Arduino
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="orange.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              RTOS
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="cyan.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              HTML
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="cyan.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              CSS
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="cyan.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              Svelte
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="cyan.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              React
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="cyan.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              Javascript
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="pink.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              MongoDB
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="pink.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              PostgreSQL
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="purple.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              Git
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="purple.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              TailwindCSS
            </Tag>
            <Tag
              size={{ md: "md", lg: "lg", xl: "lg", "2xl": "lg" }}
              variant="solid"
              color="black"
              marginX={{ md: 2, lg: 4 }}
              marginY={{ md: 1, lg: 2, xl: 3 }}
              bgColor="purple.300"
              fontWeight="semibold"
              fontSize={{ md: "md", lg: "lg", xl: "xl", "2xl": "2xl" }}
            >
              Bootstrap
            </Tag>
          </Box>
        </GridItem>
      </Grid>
    );
  }
};

export default AboutMe;
