import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutUserAInputObjectSchema as FriendshipUpdateWithoutUserAInputObjectSchema } from './FriendshipUpdateWithoutUserAInput.schema';
import { FriendshipUncheckedUpdateWithoutUserAInputObjectSchema as FriendshipUncheckedUpdateWithoutUserAInputObjectSchema } from './FriendshipUncheckedUpdateWithoutUserAInput.schema';
import { FriendshipCreateWithoutUserAInputObjectSchema as FriendshipCreateWithoutUserAInputObjectSchema } from './FriendshipCreateWithoutUserAInput.schema';
import { FriendshipUncheckedCreateWithoutUserAInputObjectSchema as FriendshipUncheckedCreateWithoutUserAInputObjectSchema } from './FriendshipUncheckedCreateWithoutUserAInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FriendshipUpdateWithoutUserAInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutUserAInputObjectSchema)]),
  create: z.union([z.lazy(() => FriendshipCreateWithoutUserAInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutUserAInputObjectSchema)])
}).strict();
export const FriendshipUpsertWithWhereUniqueWithoutUserAInputObjectSchema: z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutUserAInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutUserAInput>;
export const FriendshipUpsertWithWhereUniqueWithoutUserAInputObjectZodSchema = makeSchema();
