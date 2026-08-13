import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithoutPollInputObjectSchema as VoteUpdateWithoutPollInputObjectSchema } from './VoteUpdateWithoutPollInput.schema';
import { VoteUncheckedUpdateWithoutPollInputObjectSchema as VoteUncheckedUpdateWithoutPollInputObjectSchema } from './VoteUncheckedUpdateWithoutPollInput.schema';
import { VoteCreateWithoutPollInputObjectSchema as VoteCreateWithoutPollInputObjectSchema } from './VoteCreateWithoutPollInput.schema';
import { VoteUncheckedCreateWithoutPollInputObjectSchema as VoteUncheckedCreateWithoutPollInputObjectSchema } from './VoteUncheckedCreateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VoteUpdateWithoutPollInputObjectSchema), z.lazy(() => VoteUncheckedUpdateWithoutPollInputObjectSchema)]),
  create: z.union([z.lazy(() => VoteCreateWithoutPollInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutPollInputObjectSchema)])
}).strict();
export const VoteUpsertWithWhereUniqueWithoutPollInputObjectSchema: z.ZodType<Prisma.VoteUpsertWithWhereUniqueWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpsertWithWhereUniqueWithoutPollInput>;
export const VoteUpsertWithWhereUniqueWithoutPollInputObjectZodSchema = makeSchema();
