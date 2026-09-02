import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  childPollId: z.number().int(),
  optionId: z.number().int()
}).strict();
export const PollDependencyChildPollIdOptionIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.PollDependencyChildPollIdOptionIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyChildPollIdOptionIdCompoundUniqueInput>;
export const PollDependencyChildPollIdOptionIdCompoundUniqueInputObjectZodSchema = makeSchema();
