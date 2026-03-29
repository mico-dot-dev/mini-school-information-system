"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { UserFormSchema, UserFormModel } from "@/lib/model/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role } from "@/lib/enum/role";

function AddUserForm() {
  //Setting the form with react-hook-form and zod for validation
  const { register, handleSubmit } = useForm<UserFormModel>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      email: "",
      password: "",
      role: Role.Encoder,
    },
  });

  async function createUser(data: UserFormModel) {
    try {
      const res = await fetch("/api/auth/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();
    } catch (error) {
      console.log("error in form:" + error);
    }
  }
  return (
    <div className=" w-[95%] h-11/12 flex flex-col">
      <header className="text-2xl font-bold mb-10">New User Information</header>
      <form onSubmit={handleSubmit(createUser)} autoComplete="off">
        <div className="text-base flex flex-col gap-5 mb-30">
          <div className="flex flex-col gap-3">
            <label htmlFor="email">
              Email <span className="text-redAlert">*</span>
            </label>
            <input
              type="email"
              autoComplete="off"
              {...register("email")}
              id="email"
              required
              placeholder="Email"
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="password">
              Password <span className="text-redAlert">*</span>
            </label>
            <input
              type="password"
              id="password"
              required
              {...register("password")}
              placeholder="Password"
              autoComplete="off"
              min={8}
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="confirmPassword">
              Confirm Password <span className="text-redAlert">*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="off"
              min={8}
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="role">
              Role <span className="text-redAlert">*</span>
            </label>
            <select
              id="role"
              defaultValue={Role.Encoder}
              required
              {...register("role")}
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl cursor-pointer"
            >
              <option value={Role.Encoder}>Encoder</option>
              <option value={Role.Admin}>Admin</option>
            </select>
          </div>
        </div>

        <footer className="flex justify-center">
          <button
            type="submit"
            className="bg-button text-white font-bold py-5 w-1/2 rounded-2xl cursor-pointer"
          >
            Add User
          </button>
        </footer>
      </form>
    </div>
  );
}

export default AddUserForm;
