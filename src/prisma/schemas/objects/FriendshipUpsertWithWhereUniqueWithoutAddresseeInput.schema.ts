import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutAddresseeInputObjectSchema as FriendshipUpdateWithoutAddresseeInputObjectSchema } from './FriendshipUpdateWithoutAddresseeInput.schema';
import { FriendshipUncheckedUpdateWithoutAddresseeInputObjectSchema as FriendshipUncheckedUpdateWithoutAddresseeInputObjectSchema } from './FriendshipUncheckedUpdateWithoutAddresseeInput.schema';
import { FriendshipCreateWithoutAddresseeInputObjectSchema as FriendshipCreateWithoutAddresseeInputObjectSchema } from './FriendshipCreateWithoutAddresseeInput.schema';
import { FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema as FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema } from './FriendshipUncheckedCreateWithoutAddresseeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FriendshipUpdateWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutAddresseeInputObjectSchema)]),
  create: z.union([z.lazy(() => FriendshipCreateWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema)])
}).strict();
export const FriendshipUpsertWithWhereUniqueWithoutAddresseeInputObjectSchema: z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutAddresseeInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutAddresseeInput>;
export const FriendshipUpsertWithWhereUniqueWithoutAddresseeInputObjectZodSchema = makeSchema();
