import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutRoomsCreatedInputObjectSchema as UserCreateWithoutRoomsCreatedInputObjectSchema } from './UserCreateWithoutRoomsCreatedInput.schema';
import { UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema as UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutRoomsCreatedInput.schema';
import { UserCreateOrConnectWithoutRoomsCreatedInputObjectSchema as UserCreateOrConnectWithoutRoomsCreatedInputObjectSchema } from './UserCreateOrConnectWithoutRoomsCreatedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRoomsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRoomsCreatedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutRoomsCreatedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRoomsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutRoomsCreatedInput>;
export const UserCreateNestedOneWithoutRoomsCreatedInputObjectZodSchema = makeSchema();
