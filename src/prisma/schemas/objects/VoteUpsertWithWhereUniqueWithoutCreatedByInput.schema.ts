import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithoutCreatedByInputObjectSchema as VoteUpdateWithoutCreatedByInputObjectSchema } from './VoteUpdateWithoutCreatedByInput.schema';
import { VoteUncheckedUpdateWithoutCreatedByInputObjectSchema as VoteUncheckedUpdateWithoutCreatedByInputObjectSchema } from './VoteUncheckedUpdateWithoutCreatedByInput.schema';
import { VoteCreateWithoutCreatedByInputObjectSchema as VoteCreateWithoutCreatedByInputObjectSchema } from './VoteCreateWithoutCreatedByInput.schema';
import { VoteUncheckedCreateWithoutCreatedByInputObjectSchema as VoteUncheckedCreateWithoutCreatedByInputObjectSchema } from './VoteUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VoteUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => VoteUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => VoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const VoteUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.VoteUpsertWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpsertWithWhereUniqueWithoutCreatedByInput>;
export const VoteUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
