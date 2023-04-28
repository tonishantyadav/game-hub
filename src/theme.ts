import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// configuration object annoated with ThemeConfig interface
const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;