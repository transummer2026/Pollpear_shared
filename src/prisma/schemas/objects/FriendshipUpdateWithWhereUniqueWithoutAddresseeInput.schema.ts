import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutAddresseeInputObjectSchema as FriendshipUpdateWithoutAddresseeInputObjectSchema } from './FriendshipUpdateWithoutAddresseeInput.schema';
import { FriendshipUncheckedUpdateWithoutAddresseeInputObjectSchema as FriendshipUncheckedUpdateWithoutAddresseeInputObjectSchema } from './FriendshipUncheckedUpdateWithoutAddresseeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutAddresseeInputObjectSchema)])
}).strict();
export const FriendshipUpdateWithWhereUniqueWithoutAddresseeInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutAddresseeInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutAddresseeInput>;
export const FriendshipUpdateWithWhereUniqueWithoutAddresseeInputObjectZodSchema = makeSchema();
