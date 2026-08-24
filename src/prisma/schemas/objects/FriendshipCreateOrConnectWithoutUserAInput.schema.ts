import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipCreateWithoutUserAInputObjectSchema as FriendshipCreateWithoutUserAInputObjectSchema } from './FriendshipCreateWithoutUserAInput.schema';
import { FriendshipUncheckedCreateWithoutUserAInputObjectSchema as FriendshipUncheckedCreateWithoutUserAInputObjectSchema } from './FriendshipUncheckedCreateWithoutUserAInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FriendshipCreateWithoutUserAInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutUserAInputObjectSchema)])
}).strict();
export const FriendshipCreateOrConnectWithoutUserAInputObjectSchema: z.ZodType<Prisma.FriendshipCreateOrConnectWithoutUserAInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateOrConnectWithoutUserAInput>;
export const FriendshipCreateOrConnectWithoutUserAInputObjectZodSchema = makeSchema();
