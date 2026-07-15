import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthCreateWithoutUserInputObjectSchema as OauthCreateWithoutUserInputObjectSchema } from './OauthCreateWithoutUserInput.schema';
import { OauthUncheckedCreateWithoutUserInputObjectSchema as OauthUncheckedCreateWithoutUserInputObjectSchema } from './OauthUncheckedCreateWithoutUserInput.schema';
import { OauthCreateOrConnectWithoutUserInputObjectSchema as OauthCreateOrConnectWithoutUserInputObjectSchema } from './OauthCreateOrConnectWithoutUserInput.schema';
import { OauthCreateManyUserInputEnvelopeObjectSchema as OauthCreateManyUserInputEnvelopeObjectSchema } from './OauthCreateManyUserInputEnvelope.schema';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './OauthWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OauthCreateWithoutUserInputObjectSchema), z.lazy(() => OauthCreateWithoutUserInputObjectSchema).array(), z.lazy(() => OauthUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => OauthUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OauthCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => OauthCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OauthCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OauthWhereUniqueInputObjectSchema), z.lazy(() => OauthWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OauthUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.OauthUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthUncheckedCreateNestedManyWithoutUserInput>;
export const OauthUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
