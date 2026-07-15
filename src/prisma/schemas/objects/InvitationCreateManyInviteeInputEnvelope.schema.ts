import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationCreateManyInviteeInputObjectSchema as InvitationCreateManyInviteeInputObjectSchema } from './InvitationCreateManyInviteeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InvitationCreateManyInviteeInputObjectSchema), z.lazy(() => InvitationCreateManyInviteeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InvitationCreateManyInviteeInputEnvelopeObjectSchema: z.ZodType<Prisma.InvitationCreateManyInviteeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateManyInviteeInputEnvelope>;
export const InvitationCreateManyInviteeInputEnvelopeObjectZodSchema = makeSchema();
