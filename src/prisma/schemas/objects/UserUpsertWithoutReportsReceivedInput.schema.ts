import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutReportsReceivedInputObjectSchema as UserUpdateWithoutReportsReceivedInputObjectSchema } from './UserUpdateWithoutReportsReceivedInput.schema';
import { UserUncheckedUpdateWithoutReportsReceivedInputObjectSchema as UserUncheckedUpdateWithoutReportsReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutReportsReceivedInput.schema';
import { UserCreateWithoutReportsReceivedInputObjectSchema as UserCreateWithoutReportsReceivedInputObjectSchema } from './UserCreateWithoutReportsReceivedInput.schema';
import { UserUncheckedCreateWithoutReportsReceivedInputObjectSchema as UserUncheckedCreateWithoutReportsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutReportsReceivedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutReportsReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReportsReceivedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutReportsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportsReceivedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutReportsReceivedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutReportsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutReportsReceivedInput>;
export const UserUpsertWithoutReportsReceivedInputObjectZodSchema = makeSchema();
