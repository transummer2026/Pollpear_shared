import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberCreateManyUserInputObjectSchema as RoomMemberCreateManyUserInputObjectSchema } from './RoomMemberCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RoomMemberCreateManyUserInputObjectSchema), z.lazy(() => RoomMemberCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RoomMemberCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.RoomMemberCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateManyUserInputEnvelope>;
export const RoomMemberCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
