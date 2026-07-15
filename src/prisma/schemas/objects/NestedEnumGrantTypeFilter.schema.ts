import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { GrantTypeSchema } from '../enums/GrantType.schema'

const nestedenumgranttypefilterSchema = z.object({
  equals: GrantTypeSchema.optional(),
  in: GrantTypeSchema.array().optional(),
  notIn: GrantTypeSchema.array().optional(),
  not: z.union([GrantTypeSchema, z.lazy(() => NestedEnumGrantTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumGrantTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumGrantTypeFilter> = nestedenumgranttypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumGrantTypeFilter>;
export const NestedEnumGrantTypeFilterObjectZodSchema = nestedenumgranttypefilterSchema;
