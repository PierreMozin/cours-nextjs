import React, { useEffect, useState, useRef } from "react";
import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function Add() {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  console.log(errors);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  reset();
  const onSubmit = async (newWord) => {
    const response = await fetch("/api/vocapi", {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: { "content-type": "application/json" },
    });
    await sleep(1000);
    const data = await response.json();

    console.log(data);
  };
  const full = watch("en") && watch("fr");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="en" isInvalid={errors.en}>
          <FormLabel id="en">Ajoute un mot en anglais</FormLabel>
          <Input
            id="en"
            placeholder="English word"
            {...register("en", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />

          <FormErrorMessage id="en">
            {errors.en && errors.en.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="fr" isInvalid={errors.fr}>
          <FormLabel id="fr">Ajouter un mot en français</FormLabel>
          <Input
            id="fr"
            placeholder="french word"
            {...register("fr", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />{" "}
          <FormErrorMessage id="fr">
            {errors.fr && errors.fr.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
          isDisabled={!full}
        >
          ajouter
        </Button>
      </form>
    </>
  );
}
