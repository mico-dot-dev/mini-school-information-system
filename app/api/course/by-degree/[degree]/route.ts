export async function GET({ params }: { params: { degree: string } }) {
  try {
    const { degree } = params;
    console.log(degree);

    return new Response(
      JSON.stringify({ message: `Courses for degree level: ${degree}` }),
      { status: 200 },
    );
  } catch (error) {
    console.log("error in route:" + error);
  }
}
