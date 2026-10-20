import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateWithoutUserInputObjectSchema as BanCreateWithoutUserInputObjectSchema } from './BanCreateWithoutUserInput.schema';
import { BanUncheckedCreateWithoutUserInputObjectSchema as BanUncheckedCreateWithoutUserInputObjectSchema } from './BanUncheckedCreateWithoutUserInput.schema';
import { BanCreateOrConnectWithoutUserInputObjectSchema as BanCreateOrConnectWithoutUserInputObjectSchema } from './BanCreateOrConnectWithoutUserInput.schema';
import { BanCreateManyUserInputEnvelopeObjectSchema as BanCreateManyUserInputEnvelopeObjectSchema } from './BanCreateManyUserInputEnvelope.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanCreateWithoutUserInputObjectSchema), z.lazy(() => BanCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BanUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BanCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BanUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.BanUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUncheckedCreateNestedManyWithoutUserInput>;
export const BanUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
