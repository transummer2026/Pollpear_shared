import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanScalarWhereInputObjectSchema as BanScalarWhereInputObjectSchema } from './BanScalarWhereInput.schema';
import { BanUpdateManyMutationInputObjectSchema as BanUpdateManyMutationInputObjectSchema } from './BanUpdateManyMutationInput.schema';
import { BanUncheckedUpdateManyWithoutBannedByInputObjectSchema as BanUncheckedUpdateManyWithoutBannedByInputObjectSchema } from './BanUncheckedUpdateManyWithoutBannedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BanUpdateManyMutationInputObjectSchema), z.lazy(() => BanUncheckedUpdateManyWithoutBannedByInputObjectSchema)])
}).strict();
export const BanUpdateManyWithWhereWithoutBannedByInputObjectSchema: z.ZodType<Prisma.BanUpdateManyWithWhereWithoutBannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpdateManyWithWhereWithoutBannedByInput>;
export const BanUpdateManyWithWhereWithoutBannedByInputObjectZodSchema = makeSchema();
