import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema as OptionUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema } from './OptionUpdateOneRequiredWithoutVoteOptionsNestedInput.schema'

const makeSchema = () => z.object({
  option: z.lazy(() => OptionUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema).optional()
}).strict();
export const VoteOptionUpdateWithoutVoteInputObjectSchema: z.ZodType<Prisma.VoteOptionUpdateWithoutVoteInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUpdateWithoutVoteInput>;
export const VoteOptionUpdateWithoutVoteInputObjectZodSchema = makeSchema();
