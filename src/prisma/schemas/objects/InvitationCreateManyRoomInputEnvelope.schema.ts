import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationCreateManyRoomInputObjectSchema as InvitationCreateManyRoomInputObjectSchema } from './InvitationCreateManyRoomInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InvitationCreateManyRoomInputObjectSchema), z.lazy(() => InvitationCreateManyRoomInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InvitationCreateManyRoomInputEnvelopeObjectSchema: z.ZodType<Prisma.InvitationCreateManyRoomInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateManyRoomInputEnvelope>;
export const InvitationCreateManyRoomInputEnvelopeObjectZodSchema = makeSchema();
