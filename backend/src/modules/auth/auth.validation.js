import { z } from "zod";

export const registerValidation = z
  .object({
    fullName: z.string().trim().min(3).max(60),
    email: z.string().trim().toLowerCase().pipe(z.email()),
    phone: z
      .string()
      .trim()
      .regex(/^(\+98|0098|0)?9\d{9}$/),
    password: z.string().min(8).max(64),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .strict();
