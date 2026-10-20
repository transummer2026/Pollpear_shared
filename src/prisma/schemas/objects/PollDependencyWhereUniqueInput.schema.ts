import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyChildPollIdOptionIdCompoundUniqueInputObjectSchema as PollDependencyChildPollIdOptionIdCompoundUniqueInputObjectSchema } from './PollDependencyChildPollIdOptionIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  childPollId_optionId: z.lazy(() => PollDependencyChildPollIdOptionIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const PollDependencyWhereUniqueInputObjectSchema: z.ZodType<Prisma.PollDependencyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyWhereUniqueInput>;
export const PollDependencyWhereUniqueInputObjectZodSchema = makeSchema();
