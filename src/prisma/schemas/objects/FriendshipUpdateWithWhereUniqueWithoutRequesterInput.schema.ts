import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutRequesterInputObjectSchema as FriendshipUpdateWithoutRequesterInputObjectSchema } from './FriendshipUpdateWithoutRequesterInput.schema';
import { FriendshipUncheckedUpdateWithoutRequesterInputObjectSchema as FriendshipUncheckedUpdateWithoutRequesterInputObjectSchema } from './FriendshipUncheckedUpdateWithoutRequesterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutRequesterInputObjectSchema)])
}).strict();
export const FriendshipUpdateWithWhereUniqueWithoutRequesterInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutRequesterInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutRequesterInput>;
export const FriendshipUpdateWithWhereUniqueWithoutRequesterInputObjectZodSchema = makeSchema();
