import React, { useState } from "react";
import DonationsTable from "./DonationsTable";
import LoginForm from "./LoginForm";

const Dashboard = () => {
  const [data, setDonations] = useState([]);
  const [loggedInSuccessfully, setLoggedInSuccessfully] = useState(false);

  return (
    <>
      {loggedInSuccessfully ? (
        <DonationsTable data={data} />
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
