import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberRoomIdUserIdCompoundUniqueInputObjectSchema as RoomMemberRoomIdUserIdCompoundUniqueInputObjectSchema } from './RoomMemberRoomIdUserIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  roomId_userId: z.lazy(() => RoomMemberRoomIdUserIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const RoomMemberWhereUniqueInputObjectSchema: z.ZodType<Prisma.RoomMemberWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberWhereUniqueInput>;
export const RoomMemberWhereUniqueInputObjectZodSchema = makeSchema();
