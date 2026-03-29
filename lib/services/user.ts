"use server";
import { supabaseServerClient } from "@/lib/services/supabase/server";
import { prisma } from "@/lib/services/prisma-client";
import { LoginFormModel, UserFormModel } from "@/lib/model/user";

export async function LoginUser(loginForm: LoginFormModel) {
  try {
    const supabaseServer = await supabaseServerClient();
    //after successful login, supabase assigns a session for auth
    const { data: serverUser, error } =
      await supabaseServer.auth.signInWithPassword({
        email: loginForm.email,
        password: loginForm.password,
      });

    // console.log(error);
    if (error) {
      throw error;
    }

    return serverUser;
  } catch (error) {
    console.log("error in service:" + error);
    throw error;
  }
}

export async function GetUserRole() {
  try {
    const supabaseServer = await supabaseServerClient();
    //Gets the user info via supabase auth
    const { data: serverUser, error } = await supabaseServer.auth.getUser();
    const user = serverUser.user;

    const userRole = await prisma.user.findUnique({
      where: { email: user?.email || undefined },
      select: { role: true },
    });

    return userRole?.role;
  } catch (error) {
    console.log("error in service:" + error);
    throw error;
  }
}

export async function CreateUser(userForm: UserFormModel) {
  try {
    //Inserts into the auht schema of supabase
    //This approach allows authentication via supabase
    const supabaseServer = await supabaseServerClient();
    const { data: serverUser, error } = await supabaseServer.auth.signUp({
      email: userForm.email,
      password: userForm.password,
    });

    //After inserting into auth users a trigger in supabase is activated that inserts into a table for the public schema user table

    //Prisma handles updating the roles of the user in the public schema user table
    const updatedUser = await prisma.user.update({
      where: { email: serverUser.user?.email },
      data: { role: userForm.role },
    });

    return updatedUser;
  } catch (error) {
    console.log("error in service:" + error);
    throw error;
  }
}
