import { useForm } from "react-hook-form";
import React from "react";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  Heading,
  Wrap,
  Stack,
  Textarea,
  Box
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { serviceOptions } from "./docs/data";

export default function HookForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    const response = await fetch("https://vast-woodland-44303.herokuapp.com/submitForm/", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    console.log(response)
    window.alert("Form has been submitted")
    window.location.reload(false);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxW='container.md'>
        <Box boxShadow='dark-lg' p='8'>
          <Wrap spacing='30px' align='center'>
            <Heading>
              Idara Jaferia and Afghan SIV Support
            </Heading>
            <FormControl isRequired>
              <Stack direction={['column']} spacing='24px'>
                <Heading as='h3' size='md'>Volunteer Information</Heading>
                <Box boxShadow='outline' p='5'>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input id="firstName" placeholder="First Name" {...register("firstName")} />

                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input id="lastName" placeholder="Last Name" {...register("lastName")} />

                  <FormLabel htmlFor='email'>Email Address</FormLabel>
                  <Input id='email' type='email' placeholder="Email Address" {...register("email")} />

                  <FormLabel htmlFor='phone'>Phone Number</FormLabel>
                  <Input type="number" placeholder="2021234567" {...register("phone")} />
                </Box>


                <Heading as='h3' size='md'>Emergency Contact Information</Heading>
                <Box boxShadow='outline' p='5'>
                  <FormLabel htmlFor="emergencyfirstName">First Name</FormLabel>
                  <Input id="emergencyfirstName" placeholder="First Name" {...register("emergencyfirstName")} />

                  <FormLabel htmlFor="emergencylastName">Last Name</FormLabel>
                  <Input id="emergencylastName" placeholder="Last Name" {...register("emergencylastName")} />

                  <FormLabel htmlFor='emergencyphone'>Phone Number</FormLabel>
                  <Input type="number" placeholder="2021234567" {...register("emergencyphone")} />
                </Box>

                <FormLabel htmlFor='service'>Service</FormLabel>
                <Select
                  isMulti
                  placeholder='Select services'
                  options={serviceOptions}
                  closeMenuOnSelect={false}
                  {...register("service")}>
                </Select>

                <FormLabel htmlFor='description'>Please enter what you can provide below.</FormLabel>
                <Textarea placeholder='We thank you in advance for your contribution!' {...register("description")} />
              </Stack>
            </FormControl>
            <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </Wrap>
        </Box>
      </Container>
    </form>
  );
}