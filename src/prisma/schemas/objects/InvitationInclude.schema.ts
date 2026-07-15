import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomArgsObjectSchema as RoomArgsObjectSchema } from './RoomArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  room: z.union([z.boolean(), z.lazy(() => RoomArgsObjectSchema)]).optional(),
  inviter: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  invitee: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const InvitationIncludeObjectSchema: z.ZodType<Prisma.InvitationInclude> = makeSchema() as unknown as z.ZodType<Prisma.InvitationInclude>;
export const InvitationIncludeObjectZodSchema = makeSchema();
