import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

// path /api/users/[id]
const GET = (request: NextRequest, { params: { id } }: Props) => {
  // must get user from the database
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "leonel ka" });
};

const PUT = async (request: NextRequest, { params: { id } }: Props) => {
  const body = (await request.json()) as User;
  // look for element in database
  // proceed with element update
  if (!body.name)
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  return NextResponse.json({ id: 7, name: body.name }, { status: 200 });
};

const DELETE = (request: NextRequest, { params: { id } }: Props) => {
  // validate and proceed with deletion
  if (id > 10)
    return NextResponse.json(
      { error: `User with Id ${id} not found` },
      { status: 404 }
    );
  return NextResponse.json(`User ${id} deleted successfully`, { status: 200 });
};

export { GET, PUT, DELETE };
