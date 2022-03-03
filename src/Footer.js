import { Center, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Text textAlign={"center"} fontSize={18} pt={6}>
      Idara Jaferia and Afghan Refugee Support &copy; 2022 |{" "}
      <a href="mailto:contact@email.com">contact@email.com</a> |{" "}
      <a href="tel:+1 555 555 5555">+1 555 555 5555</a>
    </Text>
  );
};

export default Footer;
