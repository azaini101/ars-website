import { Container, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

import DonationsTable from "./DonationsTable";
import LoginForm from "./LoginForm";

const Dashboard = () => {
  const [donations, setDonations] = useState([]);
  const [loggedInSuccessfully, setLoggedInSuccessfully] = useState(false);

  return (
    <Container maxW={"container.md"} boxShadow={"dark-lg"} p={8}>
      <Heading>Dashboard</Heading>

      <br />

      {loggedInSuccessfully ? (
        <DonationsTable donations={donations} />
      ) : (
        <LoginForm
          setDonations={setDonations}
          setLoggedInSuccessfully={setLoggedInSuccessfully}
        />
      )}
    </Container>
  );
};

export default Dashboard;
