import { List, ListItem, useColorMode } from "@chakra-ui/react";
import BlinkingUnderscore from "./BlinkingUnderscore";
import { useEffect, useState } from "react";

const SelectorList = () => {
  const items = ["about_me", "education", "work_experiences", "achievements"];

  const { colorMode } = useColorMode();

  const itemsColorDark = ["yellow.300", "green.300", "cyan.300", "pink.300"];
  const itemColorLight = ["yellow.500", "green.500", "cyan.500", "pink.500"];

  const color = {
    dark: itemsColorDark,
    light: itemColorLight,
  };

  const [count, setCount] = useState(0);

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "ArrowUp" && count !== 0) {
      setCount(count - 1);
    } else if (event.key === "ArrowDown" && count !== 3) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [count]);

  return (
    <List
      className="list-group"
      fontSize="4xl"
      style={{ display: "inline-block", maxWidth: "fit-content" }}
    >
      {items.map((item, index) => (
        <ListItem
          key={item}
          paddingY={3}
          marginY={2}
          color={color[colorMode][index]}
          _hover={{ fontWeight: "semibold" }}
          fontWeight={items[count] === item ? "semibold" : "normal"}
          fontSize={["xl", "2xl", "3xl", "3xl"]}
        >
          {items[count] === item ? "> " : "  "}
          {item} {items[count] === item ? <BlinkingUnderscore /> : ""}
        </ListItem>
      ))}
    </List>
  );
};

export default SelectorList;
