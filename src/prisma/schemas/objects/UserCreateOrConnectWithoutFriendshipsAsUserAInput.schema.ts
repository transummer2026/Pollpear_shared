import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFriendshipsAsUserAInputObjectSchema as UserCreateWithoutFriendshipsAsUserAInputObjectSchema } from './UserCreateWithoutFriendshipsAsUserAInput.schema';
import { UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema as UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsAsUserAInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsAsUserAInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutFriendshipsAsUserAInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFriendshipsAsUserAInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutFriendshipsAsUserAInput>;
export const UserCreateOrConnectWithoutFriendshipsAsUserAInputObjectZodSchema = makeSchema();
