"use client";
import React from "react";
import { LoginFormSchema, LoginFormModel } from "@/lib/model/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  //Setting the login form data with react-hook-form and zod for validation
  //React hook avoids boilerplate code and integrates well with zod validation
  const { register, handleSubmit } = useForm<LoginFormModel>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function UserLogin(data: LoginFormModel) {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      router.push("/dashboard/Students");
    }
  }

  return (
    <form
      className="flex flex-col gap-10 text-lg"
      onSubmit={handleSubmit(UserLogin)}
      autoComplete="off"
    >
      <input
        type="text"
        placeholder="Email"
        className="border-b border-b-input focus:outline-none focus:border-foreground"
        {...register("email")}
      />
      <input
        type="password"
        placeholder="Password"
        className="border-b border-b-input focus:outline-none focus:border-foreground"
        {...register("password")}
      />
      <button className="self-start"> Forgot Password?</button>
      <button
        type="submit"
        className="text-white bg-button p-3 rounded-2xl font-bold cursor:pointer"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
