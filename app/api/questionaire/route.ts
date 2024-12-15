import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  try {
    const res = await request.json();
    const { questions } = res;

    if (!questions || typeof questions !== "string") {
      console.error("Invalid input:", questions);
      return new Response(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
      });
    }

    const result = await prisma.question.create({
      data: {
        questionaire: questions,
      },
    });

    console.log("Question added to db", result);

    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error) {
    console.error("Error creating question:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};
