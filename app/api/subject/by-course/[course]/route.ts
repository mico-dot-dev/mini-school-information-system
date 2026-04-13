import { GetSubjectByCourse } from "@/lib//services/subject";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ course: string }> },
) {
  const { course } = await params;
  try {
    const subjects = await GetSubjectByCourse(course);
    return Response.json(subjects);
  } catch (error) {
    console.error("Error fetching subjects by course:", error);
    return Response.json(
      { error: "Failed to fetch subjects" },
      { status: 500 },
    );
  }
}
