import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  userId: z.number().int(),
  pollId: z.number().int()
}).strict();
export const PollTemplateUserIdPollIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.PollTemplateUserIdPollIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUserIdPollIdCompoundUniqueInput>;
export const PollTemplateUserIdPollIdCompoundUniqueInputObjectZodSchema = makeSchema();
