import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { NestedEnumInvitationStatusFilterObjectSchema as NestedEnumInvitationStatusFilterObjectSchema } from './NestedEnumInvitationStatusFilter.schema'

const makeSchema = () => z.object({
  equals: InvitationStatusSchema.optional(),
  in: InvitationStatusSchema.array().optional(),
  notIn: InvitationStatusSchema.array().optional(),
  not: z.union([InvitationStatusSchema, z.lazy(() => NestedEnumInvitationStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumInvitationStatusFilterObjectSchema: z.ZodType<Prisma.EnumInvitationStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumInvitationStatusFilter>;
export const EnumInvitationStatusFilterObjectZodSchema = makeSchema();
