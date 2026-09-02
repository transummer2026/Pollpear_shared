import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanUpdateWithoutBannedByInputObjectSchema as BanUpdateWithoutBannedByInputObjectSchema } from './BanUpdateWithoutBannedByInput.schema';
import { BanUncheckedUpdateWithoutBannedByInputObjectSchema as BanUncheckedUpdateWithoutBannedByInputObjectSchema } from './BanUncheckedUpdateWithoutBannedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BanUpdateWithoutBannedByInputObjectSchema), z.lazy(() => BanUncheckedUpdateWithoutBannedByInputObjectSchema)])
}).strict();
export const BanUpdateWithWhereUniqueWithoutBannedByInputObjectSchema: z.ZodType<Prisma.BanUpdateWithWhereUniqueWithoutBannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpdateWithWhereUniqueWithoutBannedByInput>;
export const BanUpdateWithWhereUniqueWithoutBannedByInputObjectZodSchema = makeSchema();
