import React, { useState } from "react";
import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import { Buffer } from "buffer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const LoginForm = ({ setDonations, setLoggedInSuccessfully }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getDonations = async () => {
    let headers = new Headers();
    headers.set(
      "Authorization",
      "Basic " + Buffer.from(username + ":" + password).toString("base64")
    );
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");

    const response = await fetch(`${BACKEND_URL}/donations`, {
      method: "GET",
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      setDonations(data);
      setLoggedInSuccessfully(true);
    }
  };

  return (
    <Box>
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

      <Button onClick={getDonations}>Login</Button>
    </Box>
  );
};

export default LoginForm;
