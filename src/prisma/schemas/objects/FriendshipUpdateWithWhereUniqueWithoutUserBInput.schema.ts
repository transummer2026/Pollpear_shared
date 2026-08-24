import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutUserBInputObjectSchema as FriendshipUpdateWithoutUserBInputObjectSchema } from './FriendshipUpdateWithoutUserBInput.schema';
import { FriendshipUncheckedUpdateWithoutUserBInputObjectSchema as FriendshipUncheckedUpdateWithoutUserBInputObjectSchema } from './FriendshipUncheckedUpdateWithoutUserBInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateWithoutUserBInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutUserBInputObjectSchema)])
}).strict();
export const FriendshipUpdateWithWhereUniqueWithoutUserBInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutUserBInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutUserBInput>;
export const FriendshipUpdateWithWhereUniqueWithoutUserBInputObjectZodSchema = makeSchema();
