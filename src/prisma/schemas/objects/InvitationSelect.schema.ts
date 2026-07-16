import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomArgsObjectSchema as RoomArgsObjectSchema } from './RoomArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  label: z.boolean().optional(),
  roomId: z.boolean().optional(),
  inviterId: z.boolean().optional(),
  inviteeId: z.boolean().optional(),
  room: z.union([z.boolean(), z.lazy(() => RoomArgsObjectSchema)]).optional(),
  inviter: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  invitee: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const InvitationSelectObjectSchema: z.ZodType<Prisma.InvitationSelect> = makeSchema() as unknown as z.ZodType<Prisma.InvitationSelect>;
export const InvitationSelectObjectZodSchema = makeSchema();
