import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBansLiftedInputObjectSchema as UserCreateWithoutBansLiftedInputObjectSchema } from './UserCreateWithoutBansLiftedInput.schema';
import { UserUncheckedCreateWithoutBansLiftedInputObjectSchema as UserUncheckedCreateWithoutBansLiftedInputObjectSchema } from './UserUncheckedCreateWithoutBansLiftedInput.schema';
import { UserCreateOrConnectWithoutBansLiftedInputObjectSchema as UserCreateOrConnectWithoutBansLiftedInputObjectSchema } from './UserCreateOrConnectWithoutBansLiftedInput.schema';
import { UserUpsertWithoutBansLiftedInputObjectSchema as UserUpsertWithoutBansLiftedInputObjectSchema } from './UserUpsertWithoutBansLiftedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBansLiftedInputObjectSchema as UserUpdateToOneWithWhereWithoutBansLiftedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBansLiftedInput.schema';
import { UserUpdateWithoutBansLiftedInputObjectSchema as UserUpdateWithoutBansLiftedInputObjectSchema } from './UserUpdateWithoutBansLiftedInput.schema';
import { UserUncheckedUpdateWithoutBansLiftedInputObjectSchema as UserUncheckedUpdateWithoutBansLiftedInputObjectSchema } from './UserUncheckedUpdateWithoutBansLiftedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBansLiftedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansLiftedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBansLiftedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBansLiftedInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutBansLiftedInputObjectSchema), z.lazy(() => UserUpdateWithoutBansLiftedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansLiftedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutBansLiftedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutBansLiftedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutBansLiftedNestedInput>;
export const UserUpdateOneWithoutBansLiftedNestedInputObjectZodSchema = makeSchema();
