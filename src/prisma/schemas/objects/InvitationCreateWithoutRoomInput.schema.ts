import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { UserCreateNestedOneWithoutInvitationsSentInputObjectSchema as UserCreateNestedOneWithoutInvitationsSentInputObjectSchema } from './UserCreateNestedOneWithoutInvitationsSentInput.schema';
import { UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema as UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema } from './UserCreateNestedOneWithoutInvitationsReceivedInput.schema'

const makeSchema = () => z.object({
  status: InvitationStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  label: z.string().max(255).optional().nullable(),
  inviter: z.lazy(() => UserCreateNestedOneWithoutInvitationsSentInputObjectSchema),
  invitee: z.lazy(() => UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema)
}).strict();
export const InvitationCreateWithoutRoomInputObjectSchema: z.ZodType<Prisma.InvitationCreateWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateWithoutRoomInput>;
export const InvitationCreateWithoutRoomInputObjectZodSchema = makeSchema();
