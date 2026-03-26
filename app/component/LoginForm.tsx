"use client";

import { redirect } from "next/dist/server/api-utils";
import React from "react";
import { FormEvent } from "react";

function LoginForm() {
  function FormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    console.log(formData);

    window.location.href = "/dashboard";
  }

  return (
    <form className="flex flex-col gap-10 text-lg" onSubmit={FormSubmit}>
      <input
        type="text"
        placeholder="Email"
        className="border-b border-b-input focus:outline-none focus:border-foreground"
      />
      <input
        type="password"
        placeholder="Password"
        className="border-b border-b-input focus:outline-none focus:border-foreground"
      />
      <button className="self-start"> Forgot Password?</button>
      <button
        type="submit"
        className="text-white bg-button p-3 rounded-2xl font-bold"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
