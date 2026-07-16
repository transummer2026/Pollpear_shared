import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  hashtagId: z.number().int()
}).strict();
export const PollHashtagUncheckedCreateWithoutPollInputObjectSchema: z.ZodType<Prisma.PollHashtagUncheckedCreateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUncheckedCreateWithoutPollInput>;
export const PollHashtagUncheckedCreateWithoutPollInputObjectZodSchema = makeSchema();
