import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateWithoutBannedByInputObjectSchema as BanCreateWithoutBannedByInputObjectSchema } from './BanCreateWithoutBannedByInput.schema';
import { BanUncheckedCreateWithoutBannedByInputObjectSchema as BanUncheckedCreateWithoutBannedByInputObjectSchema } from './BanUncheckedCreateWithoutBannedByInput.schema';
import { BanCreateOrConnectWithoutBannedByInputObjectSchema as BanCreateOrConnectWithoutBannedByInputObjectSchema } from './BanCreateOrConnectWithoutBannedByInput.schema';
import { BanCreateManyBannedByInputEnvelopeObjectSchema as BanCreateManyBannedByInputEnvelopeObjectSchema } from './BanCreateManyBannedByInputEnvelope.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanCreateWithoutBannedByInputObjectSchema), z.lazy(() => BanCreateWithoutBannedByInputObjectSchema).array(), z.lazy(() => BanUncheckedCreateWithoutBannedByInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutBannedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanCreateOrConnectWithoutBannedByInputObjectSchema), z.lazy(() => BanCreateOrConnectWithoutBannedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanCreateManyBannedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BanUncheckedCreateNestedManyWithoutBannedByInputObjectSchema: z.ZodType<Prisma.BanUncheckedCreateNestedManyWithoutBannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUncheckedCreateNestedManyWithoutBannedByInput>;
export const BanUncheckedCreateNestedManyWithoutBannedByInputObjectZodSchema = makeSchema();
