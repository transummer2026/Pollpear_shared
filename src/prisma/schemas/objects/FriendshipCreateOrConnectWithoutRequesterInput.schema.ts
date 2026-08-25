import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipCreateWithoutRequesterInputObjectSchema as FriendshipCreateWithoutRequesterInputObjectSchema } from './FriendshipCreateWithoutRequesterInput.schema';
import { FriendshipUncheckedCreateWithoutRequesterInputObjectSchema as FriendshipUncheckedCreateWithoutRequesterInputObjectSchema } from './FriendshipUncheckedCreateWithoutRequesterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FriendshipCreateWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutRequesterInputObjectSchema)])
}).strict();
export const FriendshipCreateOrConnectWithoutRequesterInputObjectSchema: z.ZodType<Prisma.FriendshipCreateOrConnectWithoutRequesterInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateOrConnectWithoutRequesterInput>;
export const FriendshipCreateOrConnectWithoutRequesterInputObjectZodSchema = makeSchema();
