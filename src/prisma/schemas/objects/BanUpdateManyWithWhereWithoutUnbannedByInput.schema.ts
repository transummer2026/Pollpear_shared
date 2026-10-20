import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanScalarWhereInputObjectSchema as BanScalarWhereInputObjectSchema } from './BanScalarWhereInput.schema';
import { BanUpdateManyMutationInputObjectSchema as BanUpdateManyMutationInputObjectSchema } from './BanUpdateManyMutationInput.schema';
import { BanUncheckedUpdateManyWithoutUnbannedByInputObjectSchema as BanUncheckedUpdateManyWithoutUnbannedByInputObjectSchema } from './BanUncheckedUpdateManyWithoutUnbannedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BanUpdateManyMutationInputObjectSchema), z.lazy(() => BanUncheckedUpdateManyWithoutUnbannedByInputObjectSchema)])
}).strict();
export const BanUpdateManyWithWhereWithoutUnbannedByInputObjectSchema: z.ZodType<Prisma.BanUpdateManyWithWhereWithoutUnbannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpdateManyWithWhereWithoutUnbannedByInput>;
export const BanUpdateManyWithWhereWithoutUnbannedByInputObjectZodSchema = makeSchema();
