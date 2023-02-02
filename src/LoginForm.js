import React, { useState } from "react";
import { Button, Container, FormLabel, Input } from "@chakra-ui/react";
import { Buffer } from "buffer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const LoginForm = ({ setDonations, setWorkshoppers, setLoggedInSuccessfully }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const getDonations = async () => {
    setLoading(true)
    let headers = new Headers();
    headers.set(
      "Authorization",
      "Basic " + Buffer.from(username + ":" + password).toString("base64")
    );
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");

    const donationsRes = await fetch(`${BACKEND_URL}/donations`, {
      method: "GET",
      headers: headers,
    });

    const workshopRes = await fetch(`${BACKEND_URL}/workshoppers`, {
      method: "GET",
      headers: headers,
    });

    if (donationsRes.ok && workshopRes.ok) {
      let data = await donationsRes.json();
      setDonations(data);
      data = await workshopRes.json();
      setWorkshoppers(data);
      setLoggedInSuccessfully(true);
    }
    else {
      window.alert("Incorrect login credentials. Please try again.")
      setLoading(false)
    }
  };

  return (
    <Container maxW={"container.md"} boxShadow={"dark-lg"} p={8}>
      <FormLabel htmlFor="username">Username</FormLabel>
      <Input
        value={username}
        id="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <br />
      <br />

      <FormLabel htmlFor="password">Password</FormLabel>
      <Input
        value={password}
        type="password"
        id="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <br />
      <br />

      <Button
        onClick={getDonations}
        isLoading={loading}>
        Login
      </Button>
    </Container>
  );
};

export default LoginForm;
