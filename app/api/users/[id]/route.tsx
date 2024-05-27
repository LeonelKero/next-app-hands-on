import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";

interface Props {
  params: { id: string }; // url parameter is red as string instead of number
}

// path /api/users/[id]
const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const userId = Number(params.id);
  // fetch user from the database
  const user = await prisma.user.findFirst({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json(
      { error: `User with id ${params.id} not found` },
      { status: 404 }
    );
  return NextResponse.json(user);
};

const PUT = async (request: NextRequest, { params: { id } }: Props) => {
  const body = (await request.json()) as User;
  // look for element in database
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  if (!user)
    return NextResponse.json(
      { error: "Bad request, no user found" },
      { status: 400 }
    );
  // validate incoming data
  const validation = userSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // create new user
  const newUser = { ...user, ...body };
  // proceed with update
  const updatedUser = await prisma.user.update({
    data: newUser,
    where: { id: parseInt(id) },
  });
  return NextResponse.json(updatedUser, { status: 200 });
};

const DELETE = async (request: NextRequest, { params: { id } }: Props) => {
  // validate and proceed with deletion
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  if (!user)
    return NextResponse.json(
      { error: `User with Id ${id} not found` },
      { status: 404 }
    );
  // if user exist in database
  const deletedUser = await prisma.user.delete({ where: { id: parseInt(id) } });
  return NextResponse.json(
    `User with Id ${deletedUser.id} removed successfully`,
    { status: 200 }
  );
};

export { DELETE, GET, PUT };
