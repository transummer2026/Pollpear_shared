import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumInvitationStatusFilterObjectSchema as NestedEnumInvitationStatusFilterObjectSchema } from './NestedEnumInvitationStatusFilter.schema'

const nestedenuminvitationstatuswithaggregatesfilterSchema = z.object({
  equals: InvitationStatusSchema.optional(),
  in: InvitationStatusSchema.array().optional(),
  notIn: InvitationStatusSchema.array().optional(),
  not: z.union([InvitationStatusSchema, z.lazy(() => NestedEnumInvitationStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumInvitationStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumInvitationStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumInvitationStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumInvitationStatusWithAggregatesFilter> = nestedenuminvitationstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumInvitationStatusWithAggregatesFilter>;
export const NestedEnumInvitationStatusWithAggregatesFilterObjectZodSchema = nestedenuminvitationstatuswithaggregatesfilterSchema;
