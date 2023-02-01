import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  Heading,
  Stack,
  Textarea,
  Link,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { languageOptions, accompanyingOptions } from "./docs/data";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function HookForm({ version }) {
  const [languages, setLanguages] = useState("");
  const [accompanying, setAccompanying] = useState("");
  const [idaraMember, setIdaraMember] = useState("");
  const [idaraVisits, setIdaraVisits] = useState("");
  const [faith, setFaith] = useState("");
  const [agreement, setAgreement] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_EMAIL_WORKSHOP_TEMPLATE,
        "#formData",
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    data = {
      ...data,
      languages: languages.value,
      accompanying: accompanying.value,
    };
    console.log(data)

    const response = await fetch(
      `${BACKEND_URL}/submitWorkshopForm`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    window.alert("Form has been submitted");
  };

  // TODO show an actual error message
  console.log("Errors: ", errors);
  function validate(value) {
    if (!value) {
      return "This field is required.";
    } else return true;
  }

  function validateEmail(value) {
    if (!value) {
      return "This field is required.";
    } else if (value.search("@") === -1) {
      return "Please enter a valid email address.";
    } else return true;
  }

  function validatePhone(value) {
    if (!value) {
      return "This field is required.";
    } else if (value.toString().length < 10) {
      return "Please enter your full phone number.";
    } else return true;
  }

  return (
    <Container maxW={"container.md"} boxShadow={"dark-lg"} p={8}>
      <Heading>Idara-e-Jaferia's Afghan Family Workshop</Heading>

      <br />

      <form id="formData" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Heading size="md">Attendee Information</Heading>
          <FormControl isInvalid={errors.firstName} isRequired>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              id="firstName"
              placeholder="First Name"
              {...register("firstName", { validate: validate })}
            />
            <FormErrorMessage>
              {errors.firstName && errors.firstName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.lastName} isRequired>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              id="lastName"
              placeholder="Last Name"
              {...register("lastName", { validate })}
            />
            <FormErrorMessage>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email} isRequired>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="email@address.com"
              {...register("email", { validate: validateEmail })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.phone} isRequired>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <Input
              id="phone"
              placeholder="4431234567"
              type="number"
              {...register("phone", { validate: validatePhone })}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
          <FormLabel htmlFor="languages">
            Please select your preferred language:
          </FormLabel>
          <Select
            onChange={(e) => {
              setLanguages(e);
            }}
            id="languages"
            options={languageOptions}
            closeMenuOnSelect={true}
          />

          <br></br>
          <FormLabel htmlFor="accompanying">
            How many will be accompanying you?
          </FormLabel>
          <Select
            onChange={(e) => {
              setAccompanying(e);
            }}
            id="accompanying"
            options={accompanyingOptions}
            closeMenuOnSelect={true}
          />
          </FormControl>
          
          <FormLabel htmlFor="notes">Additional comments:</FormLabel>
          <Textarea
            id="notes"
            placeholder="Please type here any details you think we should know."
            {...register("notes")}
          />
        </Stack>
        <br />
        <FormControl isRequired>
          <Checkbox
            paddingTop={4}
            paddingBottom={4}
            {...register("agreement", { required: true })}
            onChange={(e) => setAgreement(!agreement)}
          >
            <FormLabel htmlFor="agreement">
              By checking the box, you agree and understand your information may
              be shared with other volunteers in order to ensure proper
              collaboration.
            </FormLabel>
          </Checkbox>
        </FormControl>
        <br />
        <Button
          colorScheme="teal"
          isLoading={isSubmitting}
          isDisabled={languages.length === 0 || agreement === false || accompanying.length === 0}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
