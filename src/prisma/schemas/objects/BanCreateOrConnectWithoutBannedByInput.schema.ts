import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanCreateWithoutBannedByInputObjectSchema as BanCreateWithoutBannedByInputObjectSchema } from './BanCreateWithoutBannedByInput.schema';
import { BanUncheckedCreateWithoutBannedByInputObjectSchema as BanUncheckedCreateWithoutBannedByInputObjectSchema } from './BanUncheckedCreateWithoutBannedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BanCreateWithoutBannedByInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutBannedByInputObjectSchema)])
}).strict();
export const BanCreateOrConnectWithoutBannedByInputObjectSchema: z.ZodType<Prisma.BanCreateOrConnectWithoutBannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateOrConnectWithoutBannedByInput>;
export const BanCreateOrConnectWithoutBannedByInputObjectZodSchema = makeSchema();
