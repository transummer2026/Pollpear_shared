import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutBansDoneInputObjectSchema as UserUpdateWithoutBansDoneInputObjectSchema } from './UserUpdateWithoutBansDoneInput.schema';
import { UserUncheckedUpdateWithoutBansDoneInputObjectSchema as UserUncheckedUpdateWithoutBansDoneInputObjectSchema } from './UserUncheckedUpdateWithoutBansDoneInput.schema';
import { UserCreateWithoutBansDoneInputObjectSchema as UserCreateWithoutBansDoneInputObjectSchema } from './UserCreateWithoutBansDoneInput.schema';
import { UserUncheckedCreateWithoutBansDoneInputObjectSchema as UserUncheckedCreateWithoutBansDoneInputObjectSchema } from './UserUncheckedCreateWithoutBansDoneInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutBansDoneInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansDoneInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutBansDoneInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansDoneInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutBansDoneInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutBansDoneInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutBansDoneInput>;
export const UserUpsertWithoutBansDoneInputObjectZodSchema = makeSchema();
