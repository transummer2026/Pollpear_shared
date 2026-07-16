import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './OauthWhereUniqueInput.schema';
import { OauthUpdateWithoutUserInputObjectSchema as OauthUpdateWithoutUserInputObjectSchema } from './OauthUpdateWithoutUserInput.schema';
import { OauthUncheckedUpdateWithoutUserInputObjectSchema as OauthUncheckedUpdateWithoutUserInputObjectSchema } from './OauthUncheckedUpdateWithoutUserInput.schema';
import { OauthCreateWithoutUserInputObjectSchema as OauthCreateWithoutUserInputObjectSchema } from './OauthCreateWithoutUserInput.schema';
import { OauthUncheckedCreateWithoutUserInputObjectSchema as OauthUncheckedCreateWithoutUserInputObjectSchema } from './OauthUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OauthWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OauthUpdateWithoutUserInputObjectSchema), z.lazy(() => OauthUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => OauthCreateWithoutUserInputObjectSchema), z.lazy(() => OauthUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const OauthUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.OauthUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthUpsertWithWhereUniqueWithoutUserInput>;
export const OauthUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
