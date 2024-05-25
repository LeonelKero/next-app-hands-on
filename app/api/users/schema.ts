import { z } from "zod";

const userSchema = z.object({
    name: z.string().min(3, "Name should be at least 3 characters"),
})

export default userSchema