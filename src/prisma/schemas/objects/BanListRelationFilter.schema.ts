import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './BanWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BanWhereInputObjectSchema).optional(),
  some: z.lazy(() => BanWhereInputObjectSchema).optional(),
  none: z.lazy(() => BanWhereInputObjectSchema).optional()
}).strict();
export const BanListRelationFilterObjectSchema: z.ZodType<Prisma.BanListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BanListRelationFilter>;
export const BanListRelationFilterObjectZodSchema = makeSchema();
