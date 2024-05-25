import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";

interface Props {
  params: { id: number };
}

const GET = (request: NextRequest, { params: { id } }: Props) => {
  // look for product in database
  // let simulated product not found if id > 10
  if (id > 20)
    return NextResponse.json(
      { error: `Product with id ${id} not found` },
      { status: 404 }
    );
  // if product is in database
  return NextResponse.json(
    { id, name: "Macbook Pro Ultra", price: 67_000 },
    { status: 200 }
  );
};

const PUT = async (request: NextRequest, { params: { id } }: Props) => {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const { name, price } = { ...validation.data };
  return NextResponse.json({ id, name, price }, { status: 200 });
};

const DELETE = (request: NextRequest, { params: { id } }: Props) => {
  // look for product in database
  // let simulated product not found if id > 10
  if (id > 20)
    return NextResponse.json(
      { error: `Product with id ${id} not found` },
      { status: 404 }
    );
  // if product is deleted from the database - proceed to deletion
  return NextResponse.json(`Product with Id ${id} deleted`, { status: 200 });
};
export { GET, PUT, DELETE };
