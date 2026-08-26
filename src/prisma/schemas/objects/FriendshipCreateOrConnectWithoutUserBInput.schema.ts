import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipCreateWithoutUserBInputObjectSchema as FriendshipCreateWithoutUserBInputObjectSchema } from './FriendshipCreateWithoutUserBInput.schema';
import { FriendshipUncheckedCreateWithoutUserBInputObjectSchema as FriendshipUncheckedCreateWithoutUserBInputObjectSchema } from './FriendshipUncheckedCreateWithoutUserBInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FriendshipCreateWithoutUserBInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutUserBInputObjectSchema)])
}).strict();
export const FriendshipCreateOrConnectWithoutUserBInputObjectSchema: z.ZodType<Prisma.FriendshipCreateOrConnectWithoutUserBInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateOrConnectWithoutUserBInput>;
export const FriendshipCreateOrConnectWithoutUserBInputObjectZodSchema = makeSchema();
