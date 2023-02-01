import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import HookForm from "./HookForm";
import WorkshopForm from "./WorkshopForm";
import Footer from "./Footer";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.render(
  <>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <HashRouter>
        <Routes>
          <Route path="/workshop" element={<WorkshopForm />} />
          <Route path="/" element={<HookForm version={"signup"}/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
      <Footer />
    </ChakraProvider>
  </>,
  document.getElementById("root")
);
