import { SubjectFormModel, SubjectFormSchema } from "@/lib/model/subject";
import { CreateSubject, GetAllSubject } from "@/lib/services/subject";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const parsedData: SubjectFormModel = SubjectFormSchema.parse(data);
    const subject = await CreateSubject(parsedData);
    return new Response(
      JSON.stringify({ message: "Subject created successfully", subject }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error creating subject" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function GET(request: Request) {
  try {
    const subjects = await GetAllSubject();

    return new Response(JSON.stringify({ data: subjects }));
  } catch (error) {
    console.log("Error in GET subjects:", error);
  }
}
