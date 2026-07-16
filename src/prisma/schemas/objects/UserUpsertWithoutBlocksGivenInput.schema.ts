import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutBlocksGivenInputObjectSchema as UserUpdateWithoutBlocksGivenInputObjectSchema } from './UserUpdateWithoutBlocksGivenInput.schema';
import { UserUncheckedUpdateWithoutBlocksGivenInputObjectSchema as UserUncheckedUpdateWithoutBlocksGivenInputObjectSchema } from './UserUncheckedUpdateWithoutBlocksGivenInput.schema';
import { UserCreateWithoutBlocksGivenInputObjectSchema as UserCreateWithoutBlocksGivenInputObjectSchema } from './UserCreateWithoutBlocksGivenInput.schema';
import { UserUncheckedCreateWithoutBlocksGivenInputObjectSchema as UserUncheckedCreateWithoutBlocksGivenInputObjectSchema } from './UserUncheckedCreateWithoutBlocksGivenInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutBlocksGivenInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBlocksGivenInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutBlocksGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlocksGivenInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutBlocksGivenInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutBlocksGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutBlocksGivenInput>;
export const UserUpsertWithoutBlocksGivenInputObjectZodSchema = makeSchema();
