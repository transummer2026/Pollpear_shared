import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutPollsCreatedInputObjectSchema as UserUpdateWithoutPollsCreatedInputObjectSchema } from './UserUpdateWithoutPollsCreatedInput.schema';
import { UserUncheckedUpdateWithoutPollsCreatedInputObjectSchema as UserUncheckedUpdateWithoutPollsCreatedInputObjectSchema } from './UserUncheckedUpdateWithoutPollsCreatedInput.schema';
import { UserCreateWithoutPollsCreatedInputObjectSchema as UserCreateWithoutPollsCreatedInputObjectSchema } from './UserCreateWithoutPollsCreatedInput.schema';
import { UserUncheckedCreateWithoutPollsCreatedInputObjectSchema as UserUncheckedCreateWithoutPollsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutPollsCreatedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPollsCreatedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPollsCreatedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPollsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPollsCreatedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPollsCreatedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPollsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPollsCreatedInput>;
export const UserUpsertWithoutPollsCreatedInputObjectZodSchema = makeSchema();
