import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationCreateManyInviterInputObjectSchema as InvitationCreateManyInviterInputObjectSchema } from './InvitationCreateManyInviterInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InvitationCreateManyInviterInputObjectSchema), z.lazy(() => InvitationCreateManyInviterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InvitationCreateManyInviterInputEnvelopeObjectSchema: z.ZodType<Prisma.InvitationCreateManyInviterInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateManyInviterInputEnvelope>;
export const InvitationCreateManyInviterInputEnvelopeObjectZodSchema = makeSchema();
