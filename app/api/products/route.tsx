import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

const GET = async (request: NextRequest) => {
  // fetch products from database
  const products = await prisma.product.findMany();
  return NextResponse.json(products, { status: 200 });
};

const POST = async (request: NextRequest) => {
  const requestBody = (await request.json()) as Product;
  const productValidation = productSchema.safeParse(requestBody);
  if (!productValidation.success)
    return NextResponse.json(productValidation.error.errors, { status: 400 });
  // once validated, save to database
  const savedProduct = await prisma.product.create({
    data: {
      name: productValidation.data.name,
      price: productValidation.data.price,
      quantity: productValidation.data.quantity,
    },
  });
  return NextResponse.json(savedProduct, { status: 201 });
};

export { GET, POST };
