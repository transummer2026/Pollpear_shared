import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRoomsCreatedInputObjectSchema as UserCreateWithoutRoomsCreatedInputObjectSchema } from './UserCreateWithoutRoomsCreatedInput.schema';
import { UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema as UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutRoomsCreatedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutRoomsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomsCreatedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutRoomsCreatedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRoomsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutRoomsCreatedInput>;
export const UserCreateOrConnectWithoutRoomsCreatedInputObjectZodSchema = makeSchema();
