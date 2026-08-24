import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema';
import { FriendshipUpdateManyMutationInputObjectSchema as FriendshipUpdateManyMutationInputObjectSchema } from './FriendshipUpdateManyMutationInput.schema';
import { FriendshipUncheckedUpdateManyWithoutUserBInputObjectSchema as FriendshipUncheckedUpdateManyWithoutUserBInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutUserBInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateManyMutationInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateManyWithoutUserBInputObjectSchema)])
}).strict();
export const FriendshipUpdateManyWithWhereWithoutUserBInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutUserBInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutUserBInput>;
export const FriendshipUpdateManyWithWhereWithoutUserBInputObjectZodSchema = makeSchema();
