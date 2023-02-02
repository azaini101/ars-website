import React, { useState } from "react";
import DonationsTable from "./DonationsTable";
import LoginForm from "./LoginForm";

const Dashboard = () => {
  const [donations, setDonations] = useState([]);
  const [workshoppers, setWorkshoppers] = useState([]);
  const [loggedInSuccessfully, setLoggedInSuccessfully] = useState(false);

  return (
    <>
      {loggedInSuccessfully ? (
        <DonationsTable donationsData={donations} workshoppersData={workshoppers} />
      ) : (
        <LoginForm
          setWorkshoppers={setWorkshoppers}
          setDonations={setDonations}
          setLoggedInSuccessfully={setLoggedInSuccessfully}
        />
      )}
    </>
  );
};

export default Dashboard;
