import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateManyUserBInputObjectSchema as FriendshipCreateManyUserBInputObjectSchema } from './FriendshipCreateManyUserBInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FriendshipCreateManyUserBInputObjectSchema), z.lazy(() => FriendshipCreateManyUserBInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FriendshipCreateManyUserBInputEnvelopeObjectSchema: z.ZodType<Prisma.FriendshipCreateManyUserBInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyUserBInputEnvelope>;
export const FriendshipCreateManyUserBInputEnvelopeObjectZodSchema = makeSchema();
