import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateManyRequesterInputObjectSchema as FriendshipCreateManyRequesterInputObjectSchema } from './FriendshipCreateManyRequesterInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FriendshipCreateManyRequesterInputObjectSchema), z.lazy(() => FriendshipCreateManyRequesterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FriendshipCreateManyRequesterInputEnvelopeObjectSchema: z.ZodType<Prisma.FriendshipCreateManyRequesterInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyRequesterInputEnvelope>;
export const FriendshipCreateManyRequesterInputEnvelopeObjectZodSchema = makeSchema();
