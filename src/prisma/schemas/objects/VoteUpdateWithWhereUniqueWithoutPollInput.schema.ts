import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithoutPollInputObjectSchema as VoteUpdateWithoutPollInputObjectSchema } from './VoteUpdateWithoutPollInput.schema';
import { VoteUncheckedUpdateWithoutPollInputObjectSchema as VoteUncheckedUpdateWithoutPollInputObjectSchema } from './VoteUncheckedUpdateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VoteUpdateWithoutPollInputObjectSchema), z.lazy(() => VoteUncheckedUpdateWithoutPollInputObjectSchema)])
}).strict();
export const VoteUpdateWithWhereUniqueWithoutPollInputObjectSchema: z.ZodType<Prisma.VoteUpdateWithWhereUniqueWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpdateWithWhereUniqueWithoutPollInput>;
export const VoteUpdateWithWhereUniqueWithoutPollInputObjectZodSchema = makeSchema();
