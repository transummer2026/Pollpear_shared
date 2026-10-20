import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutBansGivenInputObjectSchema as UserUpdateWithoutBansGivenInputObjectSchema } from './UserUpdateWithoutBansGivenInput.schema';
import { UserUncheckedUpdateWithoutBansGivenInputObjectSchema as UserUncheckedUpdateWithoutBansGivenInputObjectSchema } from './UserUncheckedUpdateWithoutBansGivenInput.schema';
import { UserCreateWithoutBansGivenInputObjectSchema as UserCreateWithoutBansGivenInputObjectSchema } from './UserCreateWithoutBansGivenInput.schema';
import { UserUncheckedCreateWithoutBansGivenInputObjectSchema as UserUncheckedCreateWithoutBansGivenInputObjectSchema } from './UserUncheckedCreateWithoutBansGivenInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutBansGivenInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansGivenInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutBansGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansGivenInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutBansGivenInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutBansGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutBansGivenInput>;
export const UserUpsertWithoutBansGivenInputObjectZodSchema = makeSchema();
