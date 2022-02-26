import React from "react";
import ReactDOM from "react-dom";
import HookForm from "./HookForm";
import { DarkMode, GlobalStyle, ChakraProvider, CSSReset, Box } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <DarkMode>
        <GlobalStyle />
        <CSSReset />
        <Box p={4}>
          <HookForm />
        </Box>
      </DarkMode>
    </ChakraProvider>
  );
}