import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutReportsGivenInputObjectSchema as UserCreateWithoutReportsGivenInputObjectSchema } from './UserCreateWithoutReportsGivenInput.schema';
import { UserUncheckedCreateWithoutReportsGivenInputObjectSchema as UserUncheckedCreateWithoutReportsGivenInputObjectSchema } from './UserUncheckedCreateWithoutReportsGivenInput.schema';
import { UserCreateOrConnectWithoutReportsGivenInputObjectSchema as UserCreateOrConnectWithoutReportsGivenInputObjectSchema } from './UserCreateOrConnectWithoutReportsGivenInput.schema';
import { UserUpsertWithoutReportsGivenInputObjectSchema as UserUpsertWithoutReportsGivenInputObjectSchema } from './UserUpsertWithoutReportsGivenInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutReportsGivenInputObjectSchema as UserUpdateToOneWithWhereWithoutReportsGivenInputObjectSchema } from './UserUpdateToOneWithWhereWithoutReportsGivenInput.schema';
import { UserUpdateWithoutReportsGivenInputObjectSchema as UserUpdateWithoutReportsGivenInputObjectSchema } from './UserUpdateWithoutReportsGivenInput.schema';
import { UserUncheckedUpdateWithoutReportsGivenInputObjectSchema as UserUncheckedUpdateWithoutReportsGivenInputObjectSchema } from './UserUncheckedUpdateWithoutReportsGivenInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReportsGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportsGivenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReportsGivenInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReportsGivenInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutReportsGivenInputObjectSchema), z.lazy(() => UserUpdateWithoutReportsGivenInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReportsGivenInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutReportsGivenNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReportsGivenNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutReportsGivenNestedInput>;
export const UserUpdateOneRequiredWithoutReportsGivenNestedInputObjectZodSchema = makeSchema();
