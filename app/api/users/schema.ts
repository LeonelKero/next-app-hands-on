import { z } from "zod";

const userSchema = z.object({
    email: z.string().email("Please provide valid email"),
    name: z.string().min(3, "Name should be at least 3 characters"),
    followers: z.number().default(0),
    isActive: z.boolean().optional().default(true)
})

export default userSchema