import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  pollId: z.number().int()
}).strict();
export const PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema: z.ZodType<Prisma.PollHashtagUncheckedCreateWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUncheckedCreateWithoutHashtagInput>;
export const PollHashtagUncheckedCreateWithoutHashtagInputObjectZodSchema = makeSchema();
