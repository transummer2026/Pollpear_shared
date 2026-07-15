import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthWhereInputObjectSchema as OauthWhereInputObjectSchema } from './OauthWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OauthWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountOauthsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountOauthsArgsObjectZodSchema = makeSchema();
