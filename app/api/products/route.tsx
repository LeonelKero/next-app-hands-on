import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

const products: Product[] = [
  { id: 1, name: "iphone 15", price: 3_000 },
  { id: 2, name: "LG Screen", price: 25_000 },
  { id: 3, name: "Samsung S21 Ultra", price: 18_500 },
  { id: 4, name: "Sony MH4", price: 9_000 },
];

const GET = (request: NextRequest) => {
  // should fetch products from database
  return NextResponse.json(products, { status: 200 });
};

const POST = async (request: NextRequest) => {
  const requestBody = await request.json();
  const productValidation = productSchema.safeParse(requestBody);
  if (!productValidation.success)
    return NextResponse.json(productValidation.error.errors, { status: 400 });
  const { name, price } = { ...productValidation.data };
  return NextResponse.json({ id: 40, name, price }, { status: 201 });
};

export { GET, POST };
