import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutRequesterInputObjectSchema as FriendshipUpdateWithoutRequesterInputObjectSchema } from './FriendshipUpdateWithoutRequesterInput.schema';
import { FriendshipUncheckedUpdateWithoutRequesterInputObjectSchema as FriendshipUncheckedUpdateWithoutRequesterInputObjectSchema } from './FriendshipUncheckedUpdateWithoutRequesterInput.schema';
import { FriendshipCreateWithoutRequesterInputObjectSchema as FriendshipCreateWithoutRequesterInputObjectSchema } from './FriendshipCreateWithoutRequesterInput.schema';
import { FriendshipUncheckedCreateWithoutRequesterInputObjectSchema as FriendshipUncheckedCreateWithoutRequesterInputObjectSchema } from './FriendshipUncheckedCreateWithoutRequesterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FriendshipUpdateWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutRequesterInputObjectSchema)]),
  create: z.union([z.lazy(() => FriendshipCreateWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutRequesterInputObjectSchema)])
}).strict();
export const FriendshipUpsertWithWhereUniqueWithoutRequesterInputObjectSchema: z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutRequesterInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutRequesterInput>;
export const FriendshipUpsertWithWhereUniqueWithoutRequesterInputObjectZodSchema = makeSchema();
