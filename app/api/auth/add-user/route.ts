"use server";
import { UserFormSchema, UserFormModel } from "@/lib/model/user";
import { CreateUser } from "@/lib/services/user";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validateForm: UserFormModel = UserFormSchema.parse(body);
    const res = await CreateUser(validateForm);

    if (res) return new Response("Successfull Sent Data", { status: 200 });
  } catch (error) {
    console.log("error in api:" + error);
    return new Response("Error processing form data", { status: 500 });
  }
}
