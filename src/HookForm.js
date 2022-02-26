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
  Select,
  Textarea
} from "@chakra-ui/react";

export default function HookForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    const response = await fetch("https://vast-woodland-44303.herokuapp.com/submitForm", {
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
      <Container>
        <Wrap spacing='30px' align='center'>
          <Heading>
            Afghan Refugee Support
          </Heading>
          <FormControl isRequired>
            <Stack direction={['column']} spacing='24px'>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input id="firstName" placeholder="First Name" {...register("firstName")}/>

              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input id="lastName" placeholder="Last Name" {...register("lastName")}/>

              <FormLabel htmlFor='email'>Email Address</FormLabel>
              <Input id='email' type='email' placeholder="Email Address" {...register("email")}/>

              <FormLabel htmlFor='tel'>Phone Number</FormLabel>
              <Input type="number" placeholder="2021234567" {...register("phone")}/>

              <FormLabel htmlFor='tel'>Service</FormLabel>
              <Select placeholder='Select option' {...register("service")}>
                <option value="Cell Phones">Cell Phones</option>
                <option value="Low cost computers">Low cost computers</option>
                <option value="Other internet access options">Other internet access options</option>
                <option value="Low cost internet">Low cost internet</option>
                <option value="Clearinghouse of health & human services in MOCO">Clearinghouse of health & human services in MOCO</option>
                <option value="Transportation">Transportation</option>
                <option value="Enrollment in Services">Enrollment in Services</option>
                <option value="Education / English classes">Education / English classes</option>
                <option value="Medical Support">Medical Support</option>
                <option value="Food assistance">Food assistance</option>
                <option value="In-Kind Supplies">In-Kind Supplies</option>
                <option value="Translation Services">Translation Services</option>
                <option value="Employment / Job training">Employment / Job training</option>
                <option value="Housing">Housing</option>
              </Select>

              <FormLabel htmlFor='email'>Please enter what you can provide below.</FormLabel>
              <Textarea placeholder='We thank you in advance for your contribution!' {...register("description")}/>
            </Stack>
          </FormControl>
          <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
            Submit
          </Button>
        </Wrap>
      </Container>
    </form>
  );
}