import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  inviteeId: z.number().int(),
  roomId: z.number().int()
}).strict();
export const InvitationInviteeIdRoomIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.InvitationInviteeIdRoomIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationInviteeIdRoomIdCompoundUniqueInput>;
export const InvitationInviteeIdRoomIdCompoundUniqueInputObjectZodSchema = makeSchema();
