import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumInvitationStatusWithAggregatesFilterObjectSchema as EnumInvitationStatusWithAggregatesFilterObjectSchema } from './EnumInvitationStatusWithAggregatesFilter.schema';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const invitationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumInvitationStatusWithAggregatesFilterObjectSchema), InvitationStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  label: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  roomId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  inviterId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  inviteeId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const InvitationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.InvitationScalarWhereWithAggregatesInput> = invitationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.InvitationScalarWhereWithAggregatesInput>;
export const InvitationScalarWhereWithAggregatesInputObjectZodSchema = invitationscalarwherewithaggregatesinputSchema;
