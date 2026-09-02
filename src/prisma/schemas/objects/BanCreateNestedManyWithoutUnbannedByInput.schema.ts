import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateWithoutUnbannedByInputObjectSchema as BanCreateWithoutUnbannedByInputObjectSchema } from './BanCreateWithoutUnbannedByInput.schema';
import { BanUncheckedCreateWithoutUnbannedByInputObjectSchema as BanUncheckedCreateWithoutUnbannedByInputObjectSchema } from './BanUncheckedCreateWithoutUnbannedByInput.schema';
import { BanCreateOrConnectWithoutUnbannedByInputObjectSchema as BanCreateOrConnectWithoutUnbannedByInputObjectSchema } from './BanCreateOrConnectWithoutUnbannedByInput.schema';
import { BanCreateManyUnbannedByInputEnvelopeObjectSchema as BanCreateManyUnbannedByInputEnvelopeObjectSchema } from './BanCreateManyUnbannedByInputEnvelope.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanCreateWithoutUnbannedByInputObjectSchema), z.lazy(() => BanCreateWithoutUnbannedByInputObjectSchema).array(), z.lazy(() => BanUncheckedCreateWithoutUnbannedByInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutUnbannedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanCreateOrConnectWithoutUnbannedByInputObjectSchema), z.lazy(() => BanCreateOrConnectWithoutUnbannedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanCreateManyUnbannedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BanCreateNestedManyWithoutUnbannedByInputObjectSchema: z.ZodType<Prisma.BanCreateNestedManyWithoutUnbannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateNestedManyWithoutUnbannedByInput>;
export const BanCreateNestedManyWithoutUnbannedByInputObjectZodSchema = makeSchema();
