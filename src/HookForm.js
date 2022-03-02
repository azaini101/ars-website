import { useForm } from "react-hook-form";
import React from "react";
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
import { serviceOptions } from "./docs/data";

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch(
      "https://vast-woodland-44303.herokuapp.com/submitForm/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    // TODO check for errors
    window.alert("Form has been submitted");
    window.location.reload(false);
  };

  // TODO show an actual error message
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxW={"container.md"} boxShadow={"dark-lg"} p={8}>
        <Heading>Idara Jaferia and Afghan SIV Support</Heading>

        <br />

        <FormControl isRequired>
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
              <Input placeholder="+1 555 555 5555" {...register("phone")} />
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
                placeholder="+1 555 555 5555"
                {...register("emergencyPhone")}
              />
            </Stack>

            <Stack>
              <FormLabel htmlFor="service">Service(s)</FormLabel>
              <Select
                isMulti
                placeholder="Select services"
                options={serviceOptions}
                closeMenuOnSelect={false}
                {...register("service")}
              ></Select>

              <FormLabel htmlFor="description">
                Provide more information about your services
              </FormLabel>
              <Textarea
                placeholder="We thank you in advance for your contribution!"
                {...register("description")}
              />
            </Stack>
          </Stack>
        </FormControl>

        <br />

        <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </Container>
    </form>
  );
}
