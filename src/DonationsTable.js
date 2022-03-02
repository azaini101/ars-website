import React from "react";
import { Text } from "@chakra-ui/react";

const DonationsTable = (donations) => {
  return (
    <Text textAlign={"center"} fontSize={18} pt={6}>
      table
      {JSON.stringify(donations)}
    </Text>
  );
};

export default DonationsTable;
