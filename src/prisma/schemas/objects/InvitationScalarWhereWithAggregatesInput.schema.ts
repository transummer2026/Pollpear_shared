import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumInvitationStatusWithAggregatesFilterObjectSchema as EnumInvitationStatusWithAggregatesFilterObjectSchema } from './EnumInvitationStatusWithAggregatesFilter.schema';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const invitationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InvitationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumInvitationStatusWithAggregatesFilterObjectSchema), InvitationStatusSchema]).optional(),
  message: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  roomId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  inviterId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  inviteeId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const InvitationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.InvitationScalarWhereWithAggregatesInput> = invitationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.InvitationScalarWhereWithAggregatesInput>;
export const InvitationScalarWhereWithAggregatesInputObjectZodSchema = invitationscalarwherewithaggregatesinputSchema;
