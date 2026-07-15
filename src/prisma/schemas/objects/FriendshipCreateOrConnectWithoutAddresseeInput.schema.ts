import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipCreateWithoutAddresseeInputObjectSchema as FriendshipCreateWithoutAddresseeInputObjectSchema } from './FriendshipCreateWithoutAddresseeInput.schema';
import { FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema as FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema } from './FriendshipUncheckedCreateWithoutAddresseeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FriendshipCreateWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema)])
}).strict();
export const FriendshipCreateOrConnectWithoutAddresseeInputObjectSchema: z.ZodType<Prisma.FriendshipCreateOrConnectWithoutAddresseeInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateOrConnectWithoutAddresseeInput>;
export const FriendshipCreateOrConnectWithoutAddresseeInputObjectZodSchema = makeSchema();
