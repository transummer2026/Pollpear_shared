import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBlocksGivenInputObjectSchema as UserCreateWithoutBlocksGivenInputObjectSchema } from './UserCreateWithoutBlocksGivenInput.schema';
import { UserUncheckedCreateWithoutBlocksGivenInputObjectSchema as UserUncheckedCreateWithoutBlocksGivenInputObjectSchema } from './UserUncheckedCreateWithoutBlocksGivenInput.schema';
import { UserCreateOrConnectWithoutBlocksGivenInputObjectSchema as UserCreateOrConnectWithoutBlocksGivenInputObjectSchema } from './UserCreateOrConnectWithoutBlocksGivenInput.schema';
import { UserUpsertWithoutBlocksGivenInputObjectSchema as UserUpsertWithoutBlocksGivenInputObjectSchema } from './UserUpsertWithoutBlocksGivenInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBlocksGivenInputObjectSchema as UserUpdateToOneWithWhereWithoutBlocksGivenInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBlocksGivenInput.schema';
import { UserUpdateWithoutBlocksGivenInputObjectSchema as UserUpdateWithoutBlocksGivenInputObjectSchema } from './UserUpdateWithoutBlocksGivenInput.schema';
import { UserUncheckedUpdateWithoutBlocksGivenInputObjectSchema as UserUncheckedUpdateWithoutBlocksGivenInputObjectSchema } from './UserUncheckedUpdateWithoutBlocksGivenInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBlocksGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlocksGivenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlocksGivenInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBlocksGivenInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutBlocksGivenInputObjectSchema), z.lazy(() => UserUpdateWithoutBlocksGivenInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBlocksGivenInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutBlocksGivenNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBlocksGivenNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutBlocksGivenNestedInput>;
export const UserUpdateOneRequiredWithoutBlocksGivenNestedInputObjectZodSchema = makeSchema();
