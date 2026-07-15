import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema';
import { FriendshipUpdateManyMutationInputObjectSchema as FriendshipUpdateManyMutationInputObjectSchema } from './FriendshipUpdateManyMutationInput.schema';
import { FriendshipUncheckedUpdateManyWithoutAddresseeInputObjectSchema as FriendshipUncheckedUpdateManyWithoutAddresseeInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutAddresseeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateManyMutationInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateManyWithoutAddresseeInputObjectSchema)])
}).strict();
export const FriendshipUpdateManyWithWhereWithoutAddresseeInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutAddresseeInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutAddresseeInput>;
export const FriendshipUpdateManyWithWhereWithoutAddresseeInputObjectZodSchema = makeSchema();
