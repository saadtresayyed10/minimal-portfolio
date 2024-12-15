import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const res = await request.json();
  const { questionaire } = res;

  const result = await prisma.question.create({
    data: {
      questionaire,
    },
  });

  console.log("Question added to db", result);

  return new Response(JSON.stringify(result), { status: 201 });
};
