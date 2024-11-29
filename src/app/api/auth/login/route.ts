import { db } from "@/server/db";
import { compare } from "bcrypt";
import { cookies } from "next/headers";

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

  if (
    !existingUser ||
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    !(await compare(password, existingUser.hashedPassword))
  ) {
    return {
      status: 401,
      body: JSON.stringify({
        error: "User do not exists",
      }),
    };
  }

  (await cookies()).set("session", existingUser.id);

  return Response.redirect("/login", 303);
}
