import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithoutCreatedByInputObjectSchema as VoteUpdateWithoutCreatedByInputObjectSchema } from './VoteUpdateWithoutCreatedByInput.schema';
import { VoteUncheckedUpdateWithoutCreatedByInputObjectSchema as VoteUncheckedUpdateWithoutCreatedByInputObjectSchema } from './VoteUncheckedUpdateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VoteUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => VoteUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const VoteUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.VoteUpdateWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpdateWithWhereUniqueWithoutCreatedByInput>;
export const VoteUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
