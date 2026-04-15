import { GetSubjectByCourse } from "@/lib//services/subject";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ course: string }> },
) {
  const { course } = await params;
  try {
    const subjects = await GetSubjectByCourse(course);
    const safeData = JSON.parse(
      JSON.stringify(subjects, (_, value) =>
        typeof value === "bigint" ? value.toString() : value,
      ),
    );
    return Response.json(safeData);
  } catch (error) {
    console.error("Error fetching subjects by course:", error);
    return Response.json(
      { error: "Failed to fetch subjects" },
      { status: 500 },
    );
  }
}
