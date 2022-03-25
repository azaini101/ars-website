import React, { useState } from "react";
import emailjs from "emailjs-com"
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
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { languageOptions, serviceOptions, timeOptions } from "./docs/data";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function HookForm() {
  const [services, setServices] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [times, setTimes] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, '#formData', process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    data = {
      ...data,
      services: services.map((service) => service.value).join("; "),
      languages: languages.map((language) => language.value).join("; "),
      times: times.map((time) => time.value).join("; "),
    };

    const response = await fetch(`${BACKEND_URL}/submitForm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    window.alert("Form has been submitted")
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
      return "Please enter a valid email address."
    } else return true;
  }

  function validatePhone(value) {
    if (!value) {
      return "This field is required.";
    } else if (value.toString().length < 10) {
      return "Please enter your full phone number."
    } else return true;
  }

  return (
    <Container maxW={"container.md"} boxShadow={"dark-lg"} p={8}>
      <Heading>Idara-e-Jaferia Refugee Support</Heading>

      <br />

      <form id="formData" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Heading size="md">Volunteer Information</Heading>
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



          <Heading size="md">Emergency Contact Information</Heading>

          <FormControl isInvalid={errors.emergencyFirstName} isRequired>
            <FormLabel htmlFor="emergencyFirstName">First Name</FormLabel>
            <Input
              id="emergencyFirstName"
              placeholder="First Name"
              {...register("emergencyFirstName", { validate: validate })}
            />
            <FormErrorMessage>
              {errors.emergencyFirstName && errors.emergencyFirstName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.emergencyLastName} isRequired>
            <FormLabel htmlFor="emergencyLastName">Last Name</FormLabel>
            <Input
              id="emergencyLastName"
              placeholder="Last Name"
              {...register("emergencyLastName", { validate: validate })}
            />
            <FormErrorMessage>
              {errors.emergencyLastName && errors.emergencyLastName.message}
            </FormErrorMessage>
          </FormControl>


          <FormControl isInvalid={errors.emergencyPhone} isRequired>
            <FormLabel htmlFor="emergencyPhone">Emergency Phone Number</FormLabel>
            <Input
              id="emergencyPhone"
              placeholder="4431234567"
              type="number"
              {...register("emergencyPhone", { validate: validatePhone })}
            />
            <FormErrorMessage>
              {errors.emergencyPhone && errors.emergencyPhone.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <Stack spacing={4}>
              <Heading size="md">How Can You Help?</Heading>
              <FormLabel htmlFor="services">
                In which areas would you like to volunteer? Select all that apply:
              </FormLabel>
              <Select
                onChange={(e) => {
                  setServices(e);
                }}
                isMulti
                id="services"
                placeholder="Select services"
                options={serviceOptions}
                closeMenuOnSelect={false}
                hasStickyGroupHeaders={true}
              />
              <FormLabel htmlFor="times">
                What times are you available? Select all that apply:
              </FormLabel>
              <Select
                onChange={(e) => {
                  setTimes(e);
                }}
                isMulti
                id="times"
                options={timeOptions}
                closeMenuOnSelect={false}
              />

              <FormLabel htmlFor="languages">
                Languages you speak: Select all that apply:
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
          </FormControl>

        </Stack>
        <br />
        <FormLabel htmlFor="notes">Additional comments:</FormLabel>
        <Textarea
          id="notes"
          placeholder="We thank you in advance for your contribution!"
          {...register("notes")}
        />
        <br />
        <br />
        <Button
          colorScheme="teal"
          isLoading={isSubmitting}
          isDisabled={services.length === 0 || times.length === 0 || languages.length === 0}
          type="submit"
        >
          Submit
        </Button>
        <Text p={3}>
          To make a financial contribution, please click{' '}
          <Link color='teal.500' href='https://jaferia.org/donations/afghan-refugee-funds/ ' target="_blank">
            here
          </Link>
          .
        </Text>
      </form>
    </Container>
  );
}
