import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark',
    
};

const scrollbar = extendTheme({
    styles: {
      global: {
        "::-webkit-scrollbar": {
          width: "0.4em",
        },
        "::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "::-webkit-scrollbar-thumb": {
          background: "transparent",
        },
      },
    },
  });

const theme = extendTheme(config, scrollbar);

export default theme;

