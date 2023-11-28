import { z } from "zod";

export const PostFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: "Title Name is required" })
    .max(100, "Max character should be 100"),
  description: z
    .string()
    .trim()
    .min(1, { message: "CEO Information is required" })
    .max(500, "Max character should be 500"),
});

export type TPostFormSchema = z.infer<typeof PostFormSchema>;
