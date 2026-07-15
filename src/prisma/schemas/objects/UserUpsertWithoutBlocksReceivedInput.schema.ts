import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutBlocksReceivedInputObjectSchema as UserUpdateWithoutBlocksReceivedInputObjectSchema } from './UserUpdateWithoutBlocksReceivedInput.schema';
import { UserUncheckedUpdateWithoutBlocksReceivedInputObjectSchema as UserUncheckedUpdateWithoutBlocksReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutBlocksReceivedInput.schema';
import { UserCreateWithoutBlocksReceivedInputObjectSchema as UserCreateWithoutBlocksReceivedInputObjectSchema } from './UserCreateWithoutBlocksReceivedInput.schema';
import { UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema as UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema } from './UserUncheckedCreateWithoutBlocksReceivedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutBlocksReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBlocksReceivedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutBlocksReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutBlocksReceivedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutBlocksReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutBlocksReceivedInput>;
export const UserUpsertWithoutBlocksReceivedInputObjectZodSchema = makeSchema();
