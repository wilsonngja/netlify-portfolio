import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

const BlinkingUnderscore = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const intervalId = setInterval(toggleVisibility, 500);

    return () => clearInterval(intervalId);
  });

  return (
    <Text as="span" color={isVisible ? "inherit" : "transparent"}>
      _
    </Text>
  );
};

export default BlinkingUnderscore;
