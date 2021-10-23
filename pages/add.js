import React, { useEffect, useState, useRef } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function Add() {
  const enWord = useRef();
  const frWord = useRef();

  const handleSubmit = (e) => {
    e.prevenDefault();
    const newWord = { en: enWord.current.value, fr: frWord.current.value };

    fetch("/api/vocapi", {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: { "content-type": "applocation/json" },
    })
      .then((re) => re.json())
      .then((data) => {
        console.log(data);
      });
    enWord.current.value = "";
    frWord.current.value = "";
  };

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel>Ajouter un mot en anglais</FormLabel>
        <Input ref={enWord} />
        <FormLabel>Ajouter un mot en français</FormLabel>
        <Input ref={frWord} />
        <Button>ajouter</Button>
      </FormControl>
    </>
  );
}
