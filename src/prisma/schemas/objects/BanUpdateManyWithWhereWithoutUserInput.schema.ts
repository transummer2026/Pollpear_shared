import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanScalarWhereInputObjectSchema as BanScalarWhereInputObjectSchema } from './BanScalarWhereInput.schema';
import { BanUpdateManyMutationInputObjectSchema as BanUpdateManyMutationInputObjectSchema } from './BanUpdateManyMutationInput.schema';
import { BanUncheckedUpdateManyWithoutUserInputObjectSchema as BanUncheckedUpdateManyWithoutUserInputObjectSchema } from './BanUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BanUpdateManyMutationInputObjectSchema), z.lazy(() => BanUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const BanUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.BanUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpdateManyWithWhereWithoutUserInput>;
export const BanUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
