import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutBansLiftedInputObjectSchema as UserUpdateWithoutBansLiftedInputObjectSchema } from './UserUpdateWithoutBansLiftedInput.schema';
import { UserUncheckedUpdateWithoutBansLiftedInputObjectSchema as UserUncheckedUpdateWithoutBansLiftedInputObjectSchema } from './UserUncheckedUpdateWithoutBansLiftedInput.schema';
import { UserCreateWithoutBansLiftedInputObjectSchema as UserCreateWithoutBansLiftedInputObjectSchema } from './UserCreateWithoutBansLiftedInput.schema';
import { UserUncheckedCreateWithoutBansLiftedInputObjectSchema as UserUncheckedCreateWithoutBansLiftedInputObjectSchema } from './UserUncheckedCreateWithoutBansLiftedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutBansLiftedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansLiftedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutBansLiftedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansLiftedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutBansLiftedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutBansLiftedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutBansLiftedInput>;
export const UserUpsertWithoutBansLiftedInputObjectZodSchema = makeSchema();
