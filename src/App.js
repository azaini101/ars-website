import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
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
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First Name" {...register("firstName", {required: true, maxLength: 80})} />
      <input type="text" placeholder="last.name" {...register("lastName", {required: true, maxLength: 100})} />
      <input type="submit" />
    </form>
  );
}