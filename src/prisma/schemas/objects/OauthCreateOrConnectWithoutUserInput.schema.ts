import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './OauthWhereUniqueInput.schema';
import { OauthCreateWithoutUserInputObjectSchema as OauthCreateWithoutUserInputObjectSchema } from './OauthCreateWithoutUserInput.schema';
import { OauthUncheckedCreateWithoutUserInputObjectSchema as OauthUncheckedCreateWithoutUserInputObjectSchema } from './OauthUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OauthWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OauthCreateWithoutUserInputObjectSchema), z.lazy(() => OauthUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const OauthCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.OauthCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthCreateOrConnectWithoutUserInput>;
export const OauthCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
