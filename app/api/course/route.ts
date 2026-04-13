import { CourseFormSchema, CourseFormModel } from "@/lib/model/course";
import { CreateCourse, GetAllCourse } from "@/lib/services/course";
import { json } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData: CourseFormModel = CourseFormSchema.parse(body);
    const course = await CreateCourse(validatedData);
    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    console.log("error in route:" + error);
  }
}

export async function GET(request: Request) {
  try {
    const data = await GetAllCourse();
    const formattedCourse: CourseFormModel[] =
      CourseFormSchema.array().parse(data);
    return new Response(JSON.stringify({ data: formattedCourse }), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Error in api" }), {
      status: 500,
    });
  }
}
