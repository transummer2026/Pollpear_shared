import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberCreateManyRoomInputObjectSchema as RoomMemberCreateManyRoomInputObjectSchema } from './RoomMemberCreateManyRoomInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RoomMemberCreateManyRoomInputObjectSchema), z.lazy(() => RoomMemberCreateManyRoomInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RoomMemberCreateManyRoomInputEnvelopeObjectSchema: z.ZodType<Prisma.RoomMemberCreateManyRoomInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateManyRoomInputEnvelope>;
export const RoomMemberCreateManyRoomInputEnvelopeObjectZodSchema = makeSchema();
