import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutFriendshipsReceivedInputObjectSchema as UserCreateWithoutFriendshipsReceivedInputObjectSchema } from './UserCreateWithoutFriendshipsReceivedInput.schema';
import { UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema as UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsReceivedInput.schema';
import { UserCreateOrConnectWithoutFriendshipsReceivedInputObjectSchema as UserCreateOrConnectWithoutFriendshipsReceivedInputObjectSchema } from './UserCreateOrConnectWithoutFriendshipsReceivedInput.schema';
import { UserUpsertWithoutFriendshipsReceivedInputObjectSchema as UserUpsertWithoutFriendshipsReceivedInputObjectSchema } from './UserUpsertWithoutFriendshipsReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutFriendshipsReceivedInputObjectSchema as UserUpdateToOneWithWhereWithoutFriendshipsReceivedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutFriendshipsReceivedInput.schema';
import { UserUpdateWithoutFriendshipsReceivedInputObjectSchema as UserUpdateWithoutFriendshipsReceivedInputObjectSchema } from './UserUpdateWithoutFriendshipsReceivedInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsReceivedInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsReceivedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFriendshipsReceivedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutFriendshipsReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutFriendshipsReceivedInputObjectSchema), z.lazy(() => UserUpdateWithoutFriendshipsReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsReceivedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutFriendshipsReceivedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFriendshipsReceivedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutFriendshipsReceivedNestedInput>;
export const UserUpdateOneRequiredWithoutFriendshipsReceivedNestedInputObjectZodSchema = makeSchema();
