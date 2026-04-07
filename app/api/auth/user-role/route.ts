import { GetUserRole } from "@/lib/services/user";

export async function GET() {
  try {
    const userRole = await GetUserRole();
    return new Response(JSON.stringify({ data: userRole }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("error in route:" + error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch user role" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
