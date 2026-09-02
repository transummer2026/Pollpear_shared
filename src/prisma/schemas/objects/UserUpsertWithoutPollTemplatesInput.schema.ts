import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutPollTemplatesInputObjectSchema as UserUpdateWithoutPollTemplatesInputObjectSchema } from './UserUpdateWithoutPollTemplatesInput.schema';
import { UserUncheckedUpdateWithoutPollTemplatesInputObjectSchema as UserUncheckedUpdateWithoutPollTemplatesInputObjectSchema } from './UserUncheckedUpdateWithoutPollTemplatesInput.schema';
import { UserCreateWithoutPollTemplatesInputObjectSchema as UserCreateWithoutPollTemplatesInputObjectSchema } from './UserCreateWithoutPollTemplatesInput.schema';
import { UserUncheckedCreateWithoutPollTemplatesInputObjectSchema as UserUncheckedCreateWithoutPollTemplatesInputObjectSchema } from './UserUncheckedCreateWithoutPollTemplatesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPollTemplatesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPollTemplatesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPollTemplatesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPollTemplatesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPollTemplatesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPollTemplatesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPollTemplatesInput>;
export const UserUpsertWithoutPollTemplatesInputObjectZodSchema = makeSchema();
