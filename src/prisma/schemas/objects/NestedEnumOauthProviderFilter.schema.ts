import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthProviderSchema } from '../enums/OauthProvider.schema'

const nestedenumoauthproviderfilterSchema = z.object({
  equals: OauthProviderSchema.optional(),
  in: OauthProviderSchema.array().optional(),
  notIn: OauthProviderSchema.array().optional(),
  not: z.union([OauthProviderSchema, z.lazy(() => NestedEnumOauthProviderFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumOauthProviderFilterObjectSchema: z.ZodType<Prisma.NestedEnumOauthProviderFilter> = nestedenumoauthproviderfilterSchema as unknown as z.ZodType<Prisma.NestedEnumOauthProviderFilter>;
export const NestedEnumOauthProviderFilterObjectZodSchema = nestedenumoauthproviderfilterSchema;
