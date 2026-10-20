import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateUserIdPollIdCompoundUniqueInputObjectSchema as PollTemplateUserIdPollIdCompoundUniqueInputObjectSchema } from './PollTemplateUserIdPollIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  userId_pollId: z.lazy(() => PollTemplateUserIdPollIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const PollTemplateWhereUniqueInputObjectSchema: z.ZodType<Prisma.PollTemplateWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateWhereUniqueInput>;
export const PollTemplateWhereUniqueInputObjectZodSchema = makeSchema();
