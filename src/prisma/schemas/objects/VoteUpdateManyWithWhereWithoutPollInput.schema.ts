import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteScalarWhereInputObjectSchema as VoteScalarWhereInputObjectSchema } from './VoteScalarWhereInput.schema';
import { VoteUpdateManyMutationInputObjectSchema as VoteUpdateManyMutationInputObjectSchema } from './VoteUpdateManyMutationInput.schema';
import { VoteUncheckedUpdateManyWithoutPollInputObjectSchema as VoteUncheckedUpdateManyWithoutPollInputObjectSchema } from './VoteUncheckedUpdateManyWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VoteUpdateManyMutationInputObjectSchema), z.lazy(() => VoteUncheckedUpdateManyWithoutPollInputObjectSchema)])
}).strict();
export const VoteUpdateManyWithWhereWithoutPollInputObjectSchema: z.ZodType<Prisma.VoteUpdateManyWithWhereWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpdateManyWithWhereWithoutPollInput>;
export const VoteUpdateManyWithWhereWithoutPollInputObjectZodSchema = makeSchema();
