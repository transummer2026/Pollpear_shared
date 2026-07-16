import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFriendshipsReceivedInputObjectSchema as UserCreateWithoutFriendshipsReceivedInputObjectSchema } from './UserCreateWithoutFriendshipsReceivedInput.schema';
import { UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema as UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutFriendshipsReceivedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFriendshipsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutFriendshipsReceivedInput>;
export const UserCreateOrConnectWithoutFriendshipsReceivedInputObjectZodSchema = makeSchema();
