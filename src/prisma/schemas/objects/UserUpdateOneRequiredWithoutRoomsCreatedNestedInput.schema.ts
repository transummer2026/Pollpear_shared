import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutRoomsCreatedInputObjectSchema as UserCreateWithoutRoomsCreatedInputObjectSchema } from './UserCreateWithoutRoomsCreatedInput.schema';
import { UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema as UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutRoomsCreatedInput.schema';
import { UserCreateOrConnectWithoutRoomsCreatedInputObjectSchema as UserCreateOrConnectWithoutRoomsCreatedInputObjectSchema } from './UserCreateOrConnectWithoutRoomsCreatedInput.schema';
import { UserUpsertWithoutRoomsCreatedInputObjectSchema as UserUpsertWithoutRoomsCreatedInputObjectSchema } from './UserUpsertWithoutRoomsCreatedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutRoomsCreatedInputObjectSchema as UserUpdateToOneWithWhereWithoutRoomsCreatedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutRoomsCreatedInput.schema';
import { UserUpdateWithoutRoomsCreatedInputObjectSchema as UserUpdateWithoutRoomsCreatedInputObjectSchema } from './UserUpdateWithoutRoomsCreatedInput.schema';
import { UserUncheckedUpdateWithoutRoomsCreatedInputObjectSchema as UserUncheckedUpdateWithoutRoomsCreatedInputObjectSchema } from './UserUncheckedUpdateWithoutRoomsCreatedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRoomsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRoomsCreatedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRoomsCreatedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutRoomsCreatedInputObjectSchema), z.lazy(() => UserUpdateWithoutRoomsCreatedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoomsCreatedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutRoomsCreatedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoomsCreatedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoomsCreatedNestedInput>;
export const UserUpdateOneRequiredWithoutRoomsCreatedNestedInputObjectZodSchema = makeSchema();
