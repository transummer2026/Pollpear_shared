import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateManyUserAInputObjectSchema as FriendshipCreateManyUserAInputObjectSchema } from './FriendshipCreateManyUserAInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FriendshipCreateManyUserAInputObjectSchema), z.lazy(() => FriendshipCreateManyUserAInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FriendshipCreateManyUserAInputEnvelopeObjectSchema: z.ZodType<Prisma.FriendshipCreateManyUserAInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyUserAInputEnvelope>;
export const FriendshipCreateManyUserAInputEnvelopeObjectZodSchema = makeSchema();
