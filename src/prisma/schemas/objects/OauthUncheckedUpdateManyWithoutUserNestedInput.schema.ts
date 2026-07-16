import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthCreateWithoutUserInputObjectSchema as OauthCreateWithoutUserInputObjectSchema } from './OauthCreateWithoutUserInput.schema';
import { OauthUncheckedCreateWithoutUserInputObjectSchema as OauthUncheckedCreateWithoutUserInputObjectSchema } from './OauthUncheckedCreateWithoutUserInput.schema';
import { OauthCreateOrConnectWithoutUserInputObjectSchema as OauthCreateOrConnectWithoutUserInputObjectSchema } from './OauthCreateOrConnectWithoutUserInput.schema';
import { OauthUpsertWithWhereUniqueWithoutUserInputObjectSchema as OauthUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './OauthUpsertWithWhereUniqueWithoutUserInput.schema';
import { OauthCreateManyUserInputEnvelopeObjectSchema as OauthCreateManyUserInputEnvelopeObjectSchema } from './OauthCreateManyUserInputEnvelope.schema';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './OauthWhereUniqueInput.schema';
import { OauthUpdateWithWhereUniqueWithoutUserInputObjectSchema as OauthUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './OauthUpdateWithWhereUniqueWithoutUserInput.schema';
import { OauthUpdateManyWithWhereWithoutUserInputObjectSchema as OauthUpdateManyWithWhereWithoutUserInputObjectSchema } from './OauthUpdateManyWithWhereWithoutUserInput.schema';
import { OauthScalarWhereInputObjectSchema as OauthScalarWhereInputObjectSchema } from './OauthScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OauthCreateWithoutUserInputObjectSchema), z.lazy(() => OauthCreateWithoutUserInputObjectSchema).array(), z.lazy(() => OauthUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => OauthUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OauthCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => OauthCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OauthUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => OauthUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OauthCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OauthWhereUniqueInputObjectSchema), z.lazy(() => OauthWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OauthWhereUniqueInputObjectSchema), z.lazy(() => OauthWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OauthWhereUniqueInputObjectSchema), z.lazy(() => OauthWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OauthWhereUniqueInputObjectSchema), z.lazy(() => OauthWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OauthUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => OauthUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OauthUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => OauthUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OauthScalarWhereInputObjectSchema), z.lazy(() => OauthScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OauthUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.OauthUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthUncheckedUpdateManyWithoutUserNestedInput>;
export const OauthUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
