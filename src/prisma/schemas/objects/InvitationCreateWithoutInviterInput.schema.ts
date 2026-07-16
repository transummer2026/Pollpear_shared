import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { RoomCreateNestedOneWithoutInvitationsInputObjectSchema as RoomCreateNestedOneWithoutInvitationsInputObjectSchema } from './RoomCreateNestedOneWithoutInvitationsInput.schema';
import { UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema as UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema } from './UserCreateNestedOneWithoutInvitationsReceivedInput.schema'

const makeSchema = () => z.object({
  status: InvitationStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  label: z.string().max(255).optional().nullable(),
  room: z.lazy(() => RoomCreateNestedOneWithoutInvitationsInputObjectSchema),
  invitee: z.lazy(() => UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema)
}).strict();
export const InvitationCreateWithoutInviterInputObjectSchema: z.ZodType<Prisma.InvitationCreateWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateWithoutInviterInput>;
export const InvitationCreateWithoutInviterInputObjectZodSchema = makeSchema();
