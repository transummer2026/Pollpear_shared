import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateManyAddresseeInputObjectSchema as FriendshipCreateManyAddresseeInputObjectSchema } from './FriendshipCreateManyAddresseeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FriendshipCreateManyAddresseeInputObjectSchema), z.lazy(() => FriendshipCreateManyAddresseeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FriendshipCreateManyAddresseeInputEnvelopeObjectSchema: z.ZodType<Prisma.FriendshipCreateManyAddresseeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyAddresseeInputEnvelope>;
export const FriendshipCreateManyAddresseeInputEnvelopeObjectZodSchema = makeSchema();
