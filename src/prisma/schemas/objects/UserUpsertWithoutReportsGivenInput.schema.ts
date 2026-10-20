import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutReportsGivenInputObjectSchema as UserUpdateWithoutReportsGivenInputObjectSchema } from './UserUpdateWithoutReportsGivenInput.schema';
import { UserUncheckedUpdateWithoutReportsGivenInputObjectSchema as UserUncheckedUpdateWithoutReportsGivenInputObjectSchema } from './UserUncheckedUpdateWithoutReportsGivenInput.schema';
import { UserCreateWithoutReportsGivenInputObjectSchema as UserCreateWithoutReportsGivenInputObjectSchema } from './UserCreateWithoutReportsGivenInput.schema';
import { UserUncheckedCreateWithoutReportsGivenInputObjectSchema as UserUncheckedCreateWithoutReportsGivenInputObjectSchema } from './UserUncheckedCreateWithoutReportsGivenInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutReportsGivenInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReportsGivenInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutReportsGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportsGivenInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutReportsGivenInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutReportsGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutReportsGivenInput>;
export const UserUpsertWithoutReportsGivenInputObjectZodSchema = makeSchema();
