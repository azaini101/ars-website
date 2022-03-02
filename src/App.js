import React from "react";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import HookForm from "./HookForm";
import Footer from "./Footer";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <HookForm />
      <Footer />
    </ChakraProvider>
  );
}
