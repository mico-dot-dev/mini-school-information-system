"use server";
import { supabaseServerClient } from "@/lib/services/supabase/server";
import { prisma } from "@/lib/services/prisma-client";
import { LoginFormModel, UserFormModel } from "@/lib/model/user";

export async function LoginUser(loginForm: LoginFormModel) {
  try {
    const supabaseServer = await supabaseServerClient();
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
    const supabaseServer = await supabaseServerClient();
    const { data: serverUser, error } = await supabaseServer.auth.signUp({
      email: userForm.email,
      password: userForm.password,
    });

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
