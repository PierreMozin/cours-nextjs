import React, { useEffect, useState, useRef } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function Add() {
  const enWord = useRef();
  const frWord = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWord = { en: enWord.current.value, fr: frWord.current.value };
    console.log(newWord);
    fetch("/api/vocapi", {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: { "content-type": "application/json" },
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
      <form onSubmit={handleSubmit}>
        <FormLabel id={1}>Ajoute un mot en anglais</FormLabel>
        <input id={2} ref={enWord} />
        <FormLabel id={3}>Ajouter un mot en français</FormLabel>
        <input id={4} ref={frWord} />
        <button>ajouter</button>
      </form>
    </>
  );
}
