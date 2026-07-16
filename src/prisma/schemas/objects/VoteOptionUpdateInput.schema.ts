import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema as VoteUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema } from './VoteUpdateOneRequiredWithoutVoteOptionsNestedInput.schema';
import { OptionUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema as OptionUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema } from './OptionUpdateOneRequiredWithoutVoteOptionsNestedInput.schema'

const makeSchema = () => z.object({
  vote: z.lazy(() => VoteUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema).optional(),
  option: z.lazy(() => OptionUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema).optional()
}).strict();
export const VoteOptionUpdateInputObjectSchema: z.ZodType<Prisma.VoteOptionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUpdateInput>;
export const VoteOptionUpdateInputObjectZodSchema = makeSchema();
