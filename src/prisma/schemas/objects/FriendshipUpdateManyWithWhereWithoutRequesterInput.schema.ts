import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema';
import { FriendshipUpdateManyMutationInputObjectSchema as FriendshipUpdateManyMutationInputObjectSchema } from './FriendshipUpdateManyMutationInput.schema';
import { FriendshipUncheckedUpdateManyWithoutRequesterInputObjectSchema as FriendshipUncheckedUpdateManyWithoutRequesterInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutRequesterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateManyMutationInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateManyWithoutRequesterInputObjectSchema)])
}).strict();
export const FriendshipUpdateManyWithWhereWithoutRequesterInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutRequesterInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutRequesterInput>;
export const FriendshipUpdateManyWithWhereWithoutRequesterInputObjectZodSchema = makeSchema();
