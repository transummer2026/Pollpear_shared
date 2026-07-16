import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutRoomsCreatedInputObjectSchema as UserUpdateWithoutRoomsCreatedInputObjectSchema } from './UserUpdateWithoutRoomsCreatedInput.schema';
import { UserUncheckedUpdateWithoutRoomsCreatedInputObjectSchema as UserUncheckedUpdateWithoutRoomsCreatedInputObjectSchema } from './UserUncheckedUpdateWithoutRoomsCreatedInput.schema';
import { UserCreateWithoutRoomsCreatedInputObjectSchema as UserCreateWithoutRoomsCreatedInputObjectSchema } from './UserCreateWithoutRoomsCreatedInput.schema';
import { UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema as UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutRoomsCreatedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutRoomsCreatedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoomsCreatedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutRoomsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutRoomsCreatedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutRoomsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutRoomsCreatedInput>;
export const UserUpsertWithoutRoomsCreatedInputObjectZodSchema = makeSchema();
