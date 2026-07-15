import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanUpdateWithoutBannedByInputObjectSchema as BanUpdateWithoutBannedByInputObjectSchema } from './BanUpdateWithoutBannedByInput.schema';
import { BanUncheckedUpdateWithoutBannedByInputObjectSchema as BanUncheckedUpdateWithoutBannedByInputObjectSchema } from './BanUncheckedUpdateWithoutBannedByInput.schema';
import { BanCreateWithoutBannedByInputObjectSchema as BanCreateWithoutBannedByInputObjectSchema } from './BanCreateWithoutBannedByInput.schema';
import { BanUncheckedCreateWithoutBannedByInputObjectSchema as BanUncheckedCreateWithoutBannedByInputObjectSchema } from './BanUncheckedCreateWithoutBannedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BanUpdateWithoutBannedByInputObjectSchema), z.lazy(() => BanUncheckedUpdateWithoutBannedByInputObjectSchema)]),
  create: z.union([z.lazy(() => BanCreateWithoutBannedByInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutBannedByInputObjectSchema)])
}).strict();
export const BanUpsertWithWhereUniqueWithoutBannedByInputObjectSchema: z.ZodType<Prisma.BanUpsertWithWhereUniqueWithoutBannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpsertWithWhereUniqueWithoutBannedByInput>;
export const BanUpsertWithWhereUniqueWithoutBannedByInputObjectZodSchema = makeSchema();
