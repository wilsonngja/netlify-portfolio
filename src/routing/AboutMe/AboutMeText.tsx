import { Text } from "@chakra-ui/react";

const AboutMeText = () => {
  return (
    <Text
      fontSize={{
        base: "sm",
        sm: "sm",
        md: "lg",
        lg: "2xl",
        xl: "xl",
        "2xl": "2xl",
      }}
      fontFamily="monospace"
      paddingY={2}
      letterSpacing="0.0005rem"
    >
      My name is Wilson, and I'm currently in my final year of studying Computer
      Engineering at NUS. My interest in Computer Engineering began during my
      time at ITE when I extensively used Arduino to develop a functional
      product for my final year project.
      <br />
      <br /> Having followed a longer educational path, I strongly believe in
      the correlation between hard work and results. This belief serves as my
      motivation to dedicate effort to my daily pursuits and strive for the
      successful completion of assigned tasks. While I am still exploring
      various fields of interest, I am particularly fascinated by the
      advancements in the artificial intelligence domain.
      <br />
      <br />
      To maintain a healthy work-life balance, I actively engage in sports such
      as Table Tennis whenever possible. Participating in competitions during my
      time at polytechnic brought me great joy and fulfillment.
    </Text>
  );
};

export default AboutMeText;
