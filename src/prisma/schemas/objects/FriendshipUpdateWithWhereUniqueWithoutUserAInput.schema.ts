import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutUserAInputObjectSchema as FriendshipUpdateWithoutUserAInputObjectSchema } from './FriendshipUpdateWithoutUserAInput.schema';
import { FriendshipUncheckedUpdateWithoutUserAInputObjectSchema as FriendshipUncheckedUpdateWithoutUserAInputObjectSchema } from './FriendshipUncheckedUpdateWithoutUserAInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateWithoutUserAInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutUserAInputObjectSchema)])
}).strict();
export const FriendshipUpdateWithWhereUniqueWithoutUserAInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutUserAInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutUserAInput>;
export const FriendshipUpdateWithWhereUniqueWithoutUserAInputObjectZodSchema = makeSchema();
