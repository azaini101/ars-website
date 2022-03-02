import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  Heading,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { languageOptions, serviceOptions } from "./docs/data";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function HookForm() {
  const [services, setServices] = useState([]);
  const [languages, setLanguages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    data = {
      ...data,
      services: services.map((service) => service.value),
      languages: languages.map((language) => language.value),
    };

    const response = await fetch(`${BACKEND_URL}/submitForm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // TODO check for errors
    window.alert("Form has been submitted");
    // window.location.reload(false);
  };

  // TODO show an actual error message
  console.log("Errors: ", errors);

  return (
    <Container maxW={"container.md"} boxShadow={"dark-lg"} p={8}>
      <Heading>Idara Jaferia and Afghan SIV Support</Heading>

      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Stack spacing={6}>
            <Stack>
              <Heading size="md">Volunteer Information</Heading>

              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                placeholder="First Name"
                {...register("firstName")}
              />

              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                placeholder="Last Name"
                {...register("lastName")}
              />

              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="email@address.com"
                {...register("email")}
              />

              <FormLabel htmlFor="phone">Phone Number</FormLabel>
              <Input
                id="phone"
                placeholder="+1 555 555 5555"
                {...register("phone")}
              />

              <FormLabel htmlFor="languages" isRequired={false}>
                Additional languages volunteer can speak fluently
              </FormLabel>
              <Select
                onChange={(e) => {
                  setLanguages(e);
                }}
                isMulti
                id="languages"
                options={languageOptions}
                closeMenuOnSelect={false}
              />
            </Stack>

            <Stack>
              <Heading size="md">Emergency Contact Information</Heading>

              <FormLabel htmlFor="emergencyFirstName">First Name</FormLabel>
              <Input
                id="emergencyFirstName"
                placeholder="First Name"
                {...register("emergencyFirstName")}
              />

              <FormLabel htmlFor="emergencyLastName">Last Name</FormLabel>
              <Input
                id="emergencyLastName"
                placeholder="Last Name"
                {...register("emergencyLastName")}
              />

              <FormLabel htmlFor="emergencyPhone">
                Emergency Phone Number
              </FormLabel>
              <Input
                id="emergencyPhone"
                placeholder="+1 555 555 5555"
                {...register("emergencyPhone")}
              />
            </Stack>

            <Stack>
              <FormLabel htmlFor="services">Service(s)</FormLabel>
              <Select
                onChange={(e) => {
                  setServices(e);
                }}
                isMulti
                id="services"
                placeholder="Select services"
                options={serviceOptions}
                closeMenuOnSelect={false}
              />

              <FormLabel htmlFor="description">
                Provide more information about your services
              </FormLabel>
              <Textarea
                id="description"
                placeholder="We thank you in advance for your contribution!"
                {...register("description")}
              />
            </Stack>
          </Stack>
        </FormControl>

        <br />

        <Button
          colorScheme="teal"
          isLoading={isSubmitting}
          isDisabled={services.length === 0}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
