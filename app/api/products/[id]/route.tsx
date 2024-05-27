import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";

interface Props {
  params: { id: string };
}

const GET = async (request: NextRequest, { params: { id } }: Props) => {
  // look for product in database
  const optionalProduct = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  if (!optionalProduct)
    return NextResponse.json(
      { error: `Product with id ${id} not found` },
      { status: 404 }
    );
  // if product is in database
  return NextResponse.json(optionalProduct, { status: 200 });
};

const PUT = async (request: NextRequest, { params: { id } }: Props) => {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // in succes validation - fetch product
  const optionalProduct = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  if (!optionalProduct)
    return NextResponse.json(`Product with Id ${id} not found`, {
      status: 404,
    });
  // when the product exists
  const newProduct = { ...optionalProduct, ...validation.data }; // Todo 1: find a way to exclude 'id' field
  const updatedProduct = await prisma.product.update({
    data: newProduct,
    where: { id: parseInt(id) },
  });
  return NextResponse.json(updatedProduct, { status: 200 });
};

const DELETE = async (request: NextRequest, { params: { id } }: Props) => {
  // look for product in database
  const optionalProduct = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  if (!optionalProduct)
    return NextResponse.json(
      { error: `Product with id ${id} not found` },
      { status: 404 }
    );
  const deletedProduct = await prisma.product.delete({
    where: { id: parseInt(id) },
  });
  // if product is present into the database - proceed to deletion
  return NextResponse.json(`Product with Id ${deletedProduct.id} deleted`, {
    status: 200,
  });
};
export { DELETE, GET, PUT };

