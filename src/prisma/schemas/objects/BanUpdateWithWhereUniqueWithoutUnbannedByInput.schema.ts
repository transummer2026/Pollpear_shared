import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanUpdateWithoutUnbannedByInputObjectSchema as BanUpdateWithoutUnbannedByInputObjectSchema } from './BanUpdateWithoutUnbannedByInput.schema';
import { BanUncheckedUpdateWithoutUnbannedByInputObjectSchema as BanUncheckedUpdateWithoutUnbannedByInputObjectSchema } from './BanUncheckedUpdateWithoutUnbannedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BanUpdateWithoutUnbannedByInputObjectSchema), z.lazy(() => BanUncheckedUpdateWithoutUnbannedByInputObjectSchema)])
}).strict();
export const BanUpdateWithWhereUniqueWithoutUnbannedByInputObjectSchema: z.ZodType<Prisma.BanUpdateWithWhereUniqueWithoutUnbannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpdateWithWhereUniqueWithoutUnbannedByInput>;
export const BanUpdateWithWhereUniqueWithoutUnbannedByInputObjectZodSchema = makeSchema();
