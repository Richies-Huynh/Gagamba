"use client";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea"
import Button from "@/components/Button"
import React from "react";
import FormLabel from "@/components/FormLabel";
import {useForm} from "react-hook-form";

export default function Contact() {
  const {register, handleSubmit} = useForm();

const onSubmit = (data: any) => {
  console.log(data);
};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel label={"Name"}/>
      <Input {...register("name")} placeholder={"John Doe"}/>
      <FormLabel label={"Email"}/>
      <Input {...register("email")} placeholder={"email@example.com"}/>
      <FormLabel label={"Message"}/>
      <Textarea {...register("message")} placeholder={"Enter message"}/>
      <br/>
      <Button label={"Submit"}/>
    </form>
  );
}