import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthScalarWhereInputObjectSchema as OauthScalarWhereInputObjectSchema } from './OauthScalarWhereInput.schema';
import { OauthUpdateManyMutationInputObjectSchema as OauthUpdateManyMutationInputObjectSchema } from './OauthUpdateManyMutationInput.schema';
import { OauthUncheckedUpdateManyWithoutUserInputObjectSchema as OauthUncheckedUpdateManyWithoutUserInputObjectSchema } from './OauthUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OauthScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OauthUpdateManyMutationInputObjectSchema), z.lazy(() => OauthUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const OauthUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.OauthUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthUpdateManyWithWhereWithoutUserInput>;
export const OauthUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
