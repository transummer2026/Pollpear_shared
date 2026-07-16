import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema as VoteUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema } from './VoteUpdateOneRequiredWithoutVoteOptionsNestedInput.schema'

const makeSchema = () => z.object({
  vote: z.lazy(() => VoteUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema).optional()
}).strict();
export const VoteOptionUpdateWithoutOptionInputObjectSchema: z.ZodType<Prisma.VoteOptionUpdateWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUpdateWithoutOptionInput>;
export const VoteOptionUpdateWithoutOptionInputObjectZodSchema = makeSchema();
