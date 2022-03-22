import { Center, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Text textAlign={"center"} fontSize={18} pt={6}>
      Idara-e-Jaferia Refugee Support &copy; 2022 |{" "}
      <a href="mailto:hussain@dmvrefugees.com">hussain@dmvrefugees.com</a> |{" "}
      <a href="tel:+1 443-717-2136">+1 443-717-2136</a>
    </Text>
  );
};

export default Footer;
