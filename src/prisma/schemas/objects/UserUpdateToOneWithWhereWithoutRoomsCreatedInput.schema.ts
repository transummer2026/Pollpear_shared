import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutRoomsCreatedInputObjectSchema as UserUpdateWithoutRoomsCreatedInputObjectSchema } from './UserUpdateWithoutRoomsCreatedInput.schema';
import { UserUncheckedUpdateWithoutRoomsCreatedInputObjectSchema as UserUncheckedUpdateWithoutRoomsCreatedInputObjectSchema } from './UserUncheckedUpdateWithoutRoomsCreatedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutRoomsCreatedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoomsCreatedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutRoomsCreatedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRoomsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRoomsCreatedInput>;
export const UserUpdateToOneWithWhereWithoutRoomsCreatedInputObjectZodSchema = makeSchema();
