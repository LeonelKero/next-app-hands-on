// GET for getting data
// POST for submitting data
// PUT for updating data
// DELETE for deleting data
// etc.

import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";

const GET = (request: NextRequest) => {
  // should interact with database
  return NextResponse.json([
    { id: 1, name: "leonel ka" },
    { id: 2, name: "netero" },
  ]);
};

const POST = async (request: NextRequest) => {
  const body = (await request.json()) as User;
  const validation = userSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 7, name: body.name }, { status: 201 });
};

export { GET, POST };
