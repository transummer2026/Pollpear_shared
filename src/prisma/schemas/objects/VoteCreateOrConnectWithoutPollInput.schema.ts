import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteCreateWithoutPollInputObjectSchema as VoteCreateWithoutPollInputObjectSchema } from './VoteCreateWithoutPollInput.schema';
import { VoteUncheckedCreateWithoutPollInputObjectSchema as VoteUncheckedCreateWithoutPollInputObjectSchema } from './VoteUncheckedCreateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VoteCreateWithoutPollInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutPollInputObjectSchema)])
}).strict();
export const VoteCreateOrConnectWithoutPollInputObjectSchema: z.ZodType<Prisma.VoteCreateOrConnectWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateOrConnectWithoutPollInput>;
export const VoteCreateOrConnectWithoutPollInputObjectZodSchema = makeSchema();
