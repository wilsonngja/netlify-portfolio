import {
  HStack,
  Icon,
  Link,
  useMediaQuery,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [isVerySmallScreen] = useMediaQuery("(max-width: 400px)");
  const isSmallScreen = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  });

  const [isMidSmallScreen] = useMediaQuery(["(max-width: 768px)"]);

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

  const handleRedirect = () => {
    const email = "wilsonngja@gmail.com";
    const mailtoUrl = `mailto:${email}`;

    window.location.href = mailtoUrl;
  };

  if (isVerySmallScreen) {
    return (
      <>
        <HStack paddingTop={2}>
          <>
            <Icon as={AiFillGithub} fontSize="md" />
            <Link href="https://github.com/wilsonngja" isExternal fontSize="md">
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
      </>
    );
  } else if (isSmallScreen && !isMidSmallScreen) {
    return (
      <>
        <HStack paddingTop={2}>
          <Icon as={AiFillGithub} fontSize="md" />
          <Link href="https://github.com/wilsonngja" isExternal fontSize="md">
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
    );
  } else if (isSmallScreen && isMidSmallScreen) {
    return (
      <VStack align="center">
        <HStack paddingTop={2}>
          <Icon as={AiFillGithub} fontSize="sm" />
          <Link href="https://github.com/wilsonngja" isExternal fontSize="xs">
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
    );
  } else {
    return (
      <>
        <HStack paddingBottom={2}>
          <Icon
            as={AiFillGithub}
            fontSize={{ base: "lg", sm: "lg", md: "lg", lg: "xl", xl: "2xl" }}
          />
          <Link
            href="https://github.com/wilsonngja"
            isExternal
            fontSize={{ md: "sm", lg: "md", xl: "lg", "2xl": "2xl" }}
          >
            @wilsonngja
          </Link>
        </HStack>
        <HStack paddingBottom={2}>
          <Icon
            as={FaTelegramPlane}
            fontSize={{ md: "lg", lg: "xl", xl: "2xl" }}
          />
          <Text fontSize={{ md: "sm", lg: "md", xl: "lg", "2xl": "xl" }}>
            @wilsonngja
          </Text>
        </HStack>
        <HStack paddingBottom={2}>
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
        <HStack paddingBottom={2}>
          <Icon as={MdEmail} fontSize={{ md: "lg", lg: "xl", xl: "2xl" }} />
          <Link
            onClick={handleRedirect}
            fontSize={{ md: "sm", lg: "md", xl: "lg", "2xl": "xl" }}
          >
            wilsonngja@gmail.com
          </Link>
        </HStack>
        <HStack paddingBottom={2}>
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
      </>
    );
  }
};

export default Contact;
