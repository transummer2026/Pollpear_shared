import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanUpdateWithoutUnbannedByInputObjectSchema as BanUpdateWithoutUnbannedByInputObjectSchema } from './BanUpdateWithoutUnbannedByInput.schema';
import { BanUncheckedUpdateWithoutUnbannedByInputObjectSchema as BanUncheckedUpdateWithoutUnbannedByInputObjectSchema } from './BanUncheckedUpdateWithoutUnbannedByInput.schema';
import { BanCreateWithoutUnbannedByInputObjectSchema as BanCreateWithoutUnbannedByInputObjectSchema } from './BanCreateWithoutUnbannedByInput.schema';
import { BanUncheckedCreateWithoutUnbannedByInputObjectSchema as BanUncheckedCreateWithoutUnbannedByInputObjectSchema } from './BanUncheckedCreateWithoutUnbannedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BanUpdateWithoutUnbannedByInputObjectSchema), z.lazy(() => BanUncheckedUpdateWithoutUnbannedByInputObjectSchema)]),
  create: z.union([z.lazy(() => BanCreateWithoutUnbannedByInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutUnbannedByInputObjectSchema)])
}).strict();
export const BanUpsertWithWhereUniqueWithoutUnbannedByInputObjectSchema: z.ZodType<Prisma.BanUpsertWithWhereUniqueWithoutUnbannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpsertWithWhereUniqueWithoutUnbannedByInput>;
export const BanUpsertWithWhereUniqueWithoutUnbannedByInputObjectZodSchema = makeSchema();
