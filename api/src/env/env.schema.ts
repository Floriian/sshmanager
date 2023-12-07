import { z } from 'zod';
export const envSchema = z.object({
  MONGO_URI: z.string().min(1, 'Missing environment value: MONGO_URI'),
  AT_SECRET: z.string().min(1, 'Missing environment value: AT_SECRET'),
});

export type Env = z.infer<typeof envSchema>;
