// GET for getting data
// POST for submitting data
// PUT for updating data
// DELETE for deleting data
// etc.

import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";
import prisma from "@/prisma/client";

const GET = async (request: NextRequest) => {
  // fetch users from database
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
};

const POST = async (request: NextRequest) => {
  const body = (await request.json()) as User;
  const validation = userSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // when validation succeed - check if email is not taken
  const existingUser = await prisma.user.findUnique({
    where: { email: validation.data.email },
  });
  if (existingUser)
    return NextResponse.json("Email already taken", { status: 400 });
  // perform saving
  const savedUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(savedUser, { status: 201 });
};

export { GET, POST };
