import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBansGivenInputObjectSchema as UserCreateWithoutBansGivenInputObjectSchema } from './UserCreateWithoutBansGivenInput.schema';
import { UserUncheckedCreateWithoutBansGivenInputObjectSchema as UserUncheckedCreateWithoutBansGivenInputObjectSchema } from './UserUncheckedCreateWithoutBansGivenInput.schema';
import { UserCreateOrConnectWithoutBansGivenInputObjectSchema as UserCreateOrConnectWithoutBansGivenInputObjectSchema } from './UserCreateOrConnectWithoutBansGivenInput.schema';
import { UserUpsertWithoutBansGivenInputObjectSchema as UserUpsertWithoutBansGivenInputObjectSchema } from './UserUpsertWithoutBansGivenInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBansGivenInputObjectSchema as UserUpdateToOneWithWhereWithoutBansGivenInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBansGivenInput.schema';
import { UserUpdateWithoutBansGivenInputObjectSchema as UserUpdateWithoutBansGivenInputObjectSchema } from './UserUpdateWithoutBansGivenInput.schema';
import { UserUncheckedUpdateWithoutBansGivenInputObjectSchema as UserUncheckedUpdateWithoutBansGivenInputObjectSchema } from './UserUncheckedUpdateWithoutBansGivenInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBansGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansGivenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBansGivenInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBansGivenInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutBansGivenInputObjectSchema), z.lazy(() => UserUpdateWithoutBansGivenInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansGivenInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutBansGivenNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBansGivenNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutBansGivenNestedInput>;
export const UserUpdateOneRequiredWithoutBansGivenNestedInputObjectZodSchema = makeSchema();
