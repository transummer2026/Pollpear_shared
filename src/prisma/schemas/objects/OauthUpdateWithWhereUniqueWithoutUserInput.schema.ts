import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './OauthWhereUniqueInput.schema';
import { OauthUpdateWithoutUserInputObjectSchema as OauthUpdateWithoutUserInputObjectSchema } from './OauthUpdateWithoutUserInput.schema';
import { OauthUncheckedUpdateWithoutUserInputObjectSchema as OauthUncheckedUpdateWithoutUserInputObjectSchema } from './OauthUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OauthWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OauthUpdateWithoutUserInputObjectSchema), z.lazy(() => OauthUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const OauthUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.OauthUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthUpdateWithWhereUniqueWithoutUserInput>;
export const OauthUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
