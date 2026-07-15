import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { RoomCreateNestedOneWithoutInvitationsInputObjectSchema as RoomCreateNestedOneWithoutInvitationsInputObjectSchema } from './RoomCreateNestedOneWithoutInvitationsInput.schema';
import { UserCreateNestedOneWithoutInvitationsSentInputObjectSchema as UserCreateNestedOneWithoutInvitationsSentInputObjectSchema } from './UserCreateNestedOneWithoutInvitationsSentInput.schema'

const makeSchema = () => z.object({
  status: InvitationStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  label: z.string().max(255).optional().nullable(),
  room: z.lazy(() => RoomCreateNestedOneWithoutInvitationsInputObjectSchema),
  inviter: z.lazy(() => UserCreateNestedOneWithoutInvitationsSentInputObjectSchema)
}).strict();
export const InvitationCreateWithoutInviteeInputObjectSchema: z.ZodType<Prisma.InvitationCreateWithoutInviteeInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateWithoutInviteeInput>;
export const InvitationCreateWithoutInviteeInputObjectZodSchema = makeSchema();
