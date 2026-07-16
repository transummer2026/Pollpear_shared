import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateWithoutAddresseeInputObjectSchema as FriendshipCreateWithoutAddresseeInputObjectSchema } from './FriendshipCreateWithoutAddresseeInput.schema';
import { FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema as FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema } from './FriendshipUncheckedCreateWithoutAddresseeInput.schema';
import { FriendshipCreateOrConnectWithoutAddresseeInputObjectSchema as FriendshipCreateOrConnectWithoutAddresseeInputObjectSchema } from './FriendshipCreateOrConnectWithoutAddresseeInput.schema';
import { FriendshipCreateManyAddresseeInputEnvelopeObjectSchema as FriendshipCreateManyAddresseeInputEnvelopeObjectSchema } from './FriendshipCreateManyAddresseeInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipCreateWithoutAddresseeInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutAddresseeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyAddresseeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipCreateNestedManyWithoutAddresseeInputObjectSchema: z.ZodType<Prisma.FriendshipCreateNestedManyWithoutAddresseeInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateNestedManyWithoutAddresseeInput>;
export const FriendshipCreateNestedManyWithoutAddresseeInputObjectZodSchema = makeSchema();
