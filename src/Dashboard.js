import React, { useState } from "react";
import { Container, Heading } from "@chakra-ui/react";
import DonationsTable from "./DonationsTable";
import LoginForm from "./LoginForm";

const Dashboard = () => {
  const [donations, setDonations] = useState([]);
  const [loggedInSuccessfully, setLoggedInSuccessfully] = useState(false);

  return (
    <>
      <Heading textAlign={"center"} pt={6}>
        Dashboard
      </Heading>

      <br />

      {loggedInSuccessfully ? (
        <DonationsTable donations={donations} />
      ) : (
        <LoginForm
          setDonations={setDonations}
          setLoggedInSuccessfully={setLoggedInSuccessfully}
        />
      )}
    </>
  );
};

export default Dashboard;
