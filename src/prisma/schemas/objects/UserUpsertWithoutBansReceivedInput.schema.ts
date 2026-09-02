import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutBansReceivedInputObjectSchema as UserUpdateWithoutBansReceivedInputObjectSchema } from './UserUpdateWithoutBansReceivedInput.schema';
import { UserUncheckedUpdateWithoutBansReceivedInputObjectSchema as UserUncheckedUpdateWithoutBansReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutBansReceivedInput.schema';
import { UserCreateWithoutBansReceivedInputObjectSchema as UserCreateWithoutBansReceivedInputObjectSchema } from './UserCreateWithoutBansReceivedInput.schema';
import { UserUncheckedCreateWithoutBansReceivedInputObjectSchema as UserUncheckedCreateWithoutBansReceivedInputObjectSchema } from './UserUncheckedCreateWithoutBansReceivedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutBansReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansReceivedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutBansReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansReceivedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutBansReceivedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutBansReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutBansReceivedInput>;
export const UserUpsertWithoutBansReceivedInputObjectZodSchema = makeSchema();
