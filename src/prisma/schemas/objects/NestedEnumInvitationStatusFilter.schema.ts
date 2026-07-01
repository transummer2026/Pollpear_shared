import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema'

const nestedenuminvitationstatusfilterSchema = z.object({
  equals: InvitationStatusSchema.optional(),
  in: InvitationStatusSchema.array().optional(),
  notIn: InvitationStatusSchema.array().optional(),
  not: z.union([InvitationStatusSchema, z.lazy(() => NestedEnumInvitationStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumInvitationStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumInvitationStatusFilter> = nestedenuminvitationstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumInvitationStatusFilter>;
export const NestedEnumInvitationStatusFilterObjectZodSchema = nestedenuminvitationstatusfilterSchema;
