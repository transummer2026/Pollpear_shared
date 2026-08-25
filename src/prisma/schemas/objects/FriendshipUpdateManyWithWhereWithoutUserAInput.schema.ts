import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema';
import { FriendshipUpdateManyMutationInputObjectSchema as FriendshipUpdateManyMutationInputObjectSchema } from './FriendshipUpdateManyMutationInput.schema';
import { FriendshipUncheckedUpdateManyWithoutUserAInputObjectSchema as FriendshipUncheckedUpdateManyWithoutUserAInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutUserAInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateManyMutationInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateManyWithoutUserAInputObjectSchema)])
}).strict();
export const FriendshipUpdateManyWithWhereWithoutUserAInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutUserAInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutUserAInput>;
export const FriendshipUpdateManyWithWhereWithoutUserAInputObjectZodSchema = makeSchema();
