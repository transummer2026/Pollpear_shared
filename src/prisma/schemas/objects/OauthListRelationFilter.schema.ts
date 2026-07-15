import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthWhereInputObjectSchema as OauthWhereInputObjectSchema } from './OauthWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => OauthWhereInputObjectSchema).optional(),
  some: z.lazy(() => OauthWhereInputObjectSchema).optional(),
  none: z.lazy(() => OauthWhereInputObjectSchema).optional()
}).strict();
export const OauthListRelationFilterObjectSchema: z.ZodType<Prisma.OauthListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OauthListRelationFilter>;
export const OauthListRelationFilterObjectZodSchema = makeSchema();
