import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import HookForm from "./HookForm";
import Footer from "./Footer";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.render(
  <>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HookForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  </>,
  document.getElementById("root")
);
