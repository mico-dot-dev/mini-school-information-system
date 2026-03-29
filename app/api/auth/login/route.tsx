import { LoginFormSchema, LoginFormModel } from "@/lib/model/user";
import { LoginUser } from "@/lib/services/user";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validateLogin: LoginFormModel = LoginFormSchema.parse(body);
    const res = LoginUser(validateLogin);
    if (await res)
      return new Response("Successfull Sent Data", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error Sending Data", { status: 500 });
  }
}
