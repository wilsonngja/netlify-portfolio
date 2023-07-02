import { List, ListItem, useColorMode } from "@chakra-ui/react";
import BlinkingUnderscore from "../BlinkingUnderscore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SelectorList = () => {
  const items = [
    "about_me",
    "education",
    "work_experiences",
    "projects",
    "achievements",
  ];

  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  const itemsColorDark = [
    "yellow.300",
    "green.300",
    "cyan.300",
    "pink.300",
    "purple.300",
  ];
  const itemColorLight = [
    "yellow.500",
    "green.500",
    "cyan.500",
    "pink.500",
    "purple.500",
  ];

  const color = {
    dark: itemsColorDark,
    light: itemColorLight,
  };

  const colorInactive = {
    dark: "whiteAlpha.300",
    light: "blackAlpha.500",
  };

  const [count, setCount] = useState(0);

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "ArrowUp" && count !== 0) {
      setCount(count - 1);
    } else if (event.key === "ArrowDown" && count !== 4) {
      setCount(count + 1);
    } else if (event.key === "Enter") {
      navigate(items[count]);
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
      style={{ display: "inline-block", maxWidth: "fit-content" }}
    >
      {items.map((item, index) => (
        <Link to={item}>
          <ListItem
            key={item}
            paddingY={3}
            marginY={2}
            color={
              items[count] === item
                ? color[colorMode][index]
                : colorInactive[colorMode]
            }
            _hover={{ color: color[colorMode][index], fontWeight: "semibold" }}
            fontWeight="normal"
            fontSize={{
              base: "2xl",
              sm: "3xl",
              md: "3xl",
              lg: "2xl",
              xl: "3xl",
              "2xl": "3xl",
            }}
            fontFamily="monospace"
          >
            {items[count] === item ? "> " : "  "}
            {item} {items[count] === item ? <BlinkingUnderscore /> : ""}
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default SelectorList;
