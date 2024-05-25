import { z } from "zod";

const productSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(3, "Product name should be at least 3 characters"),
    price: z.number()
})

export default productSchema