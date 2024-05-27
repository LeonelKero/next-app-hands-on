import { z } from "zod";

const productSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(3, "Product name should be at least 3 characters"),
    price: z.number().min(5, "Price should be at least $5."),
    quantity: z.number().min(1, "At least one item required")
})

export default productSchema