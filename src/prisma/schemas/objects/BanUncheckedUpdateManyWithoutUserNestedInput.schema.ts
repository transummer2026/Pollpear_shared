import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateWithoutUserInputObjectSchema as BanCreateWithoutUserInputObjectSchema } from './BanCreateWithoutUserInput.schema';
import { BanUncheckedCreateWithoutUserInputObjectSchema as BanUncheckedCreateWithoutUserInputObjectSchema } from './BanUncheckedCreateWithoutUserInput.schema';
import { BanCreateOrConnectWithoutUserInputObjectSchema as BanCreateOrConnectWithoutUserInputObjectSchema } from './BanCreateOrConnectWithoutUserInput.schema';
import { BanUpsertWithWhereUniqueWithoutUserInputObjectSchema as BanUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './BanUpsertWithWhereUniqueWithoutUserInput.schema';
import { BanCreateManyUserInputEnvelopeObjectSchema as BanCreateManyUserInputEnvelopeObjectSchema } from './BanCreateManyUserInputEnvelope.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanUpdateWithWhereUniqueWithoutUserInputObjectSchema as BanUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './BanUpdateWithWhereUniqueWithoutUserInput.schema';
import { BanUpdateManyWithWhereWithoutUserInputObjectSchema as BanUpdateManyWithWhereWithoutUserInputObjectSchema } from './BanUpdateManyWithWhereWithoutUserInput.schema';
import { BanScalarWhereInputObjectSchema as BanScalarWhereInputObjectSchema } from './BanScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanCreateWithoutUserInputObjectSchema), z.lazy(() => BanCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BanUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BanCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BanUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BanUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BanWhereUniqueInputObjectSchema), z.lazy(() => BanWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BanUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BanUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BanUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => BanUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BanScalarWhereInputObjectSchema), z.lazy(() => BanScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BanUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.BanUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUncheckedUpdateManyWithoutUserNestedInput>;
export const BanUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
