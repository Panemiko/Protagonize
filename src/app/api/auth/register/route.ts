import { db } from "@/server/db";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  const { username, password } = (await req.json()) as {
    username: string;
    password: string;
  };

  const existingUser = await db.user.findFirst({
    where: {
      username,
    },
  });

  if (existingUser) {
    return {
      status: 400,
      body: {
        error: "User already exists",
      },
    };
  }

  await db.user.create({
    data: {
      username,
      hashedPassword: await hash(password, 10),
    },
  });

  return Response.redirect("/login", 303);
}
