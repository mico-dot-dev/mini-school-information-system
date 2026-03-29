import { SubjectFormModel, SubjectFormSchema } from "@/lib/model/subject";
import { CreateSubject } from "@/lib/services/subject";

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
