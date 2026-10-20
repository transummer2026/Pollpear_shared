import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanCreateWithoutUnbannedByInputObjectSchema as BanCreateWithoutUnbannedByInputObjectSchema } from './BanCreateWithoutUnbannedByInput.schema';
import { BanUncheckedCreateWithoutUnbannedByInputObjectSchema as BanUncheckedCreateWithoutUnbannedByInputObjectSchema } from './BanUncheckedCreateWithoutUnbannedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BanCreateWithoutUnbannedByInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutUnbannedByInputObjectSchema)])
}).strict();
export const BanCreateOrConnectWithoutUnbannedByInputObjectSchema: z.ZodType<Prisma.BanCreateOrConnectWithoutUnbannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateOrConnectWithoutUnbannedByInput>;
export const BanCreateOrConnectWithoutUnbannedByInputObjectZodSchema = makeSchema();
