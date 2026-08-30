import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationInviteeIdRoomIdCompoundUniqueInputObjectSchema as InvitationInviteeIdRoomIdCompoundUniqueInputObjectSchema } from './InvitationInviteeIdRoomIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  inviteeId_roomId: z.lazy(() => InvitationInviteeIdRoomIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const InvitationWhereUniqueInputObjectSchema: z.ZodType<Prisma.InvitationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationWhereUniqueInput>;
export const InvitationWhereUniqueInputObjectZodSchema = makeSchema();
