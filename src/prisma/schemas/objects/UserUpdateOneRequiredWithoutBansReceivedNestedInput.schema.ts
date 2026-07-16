import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBansReceivedInputObjectSchema as UserCreateWithoutBansReceivedInputObjectSchema } from './UserCreateWithoutBansReceivedInput.schema';
import { UserUncheckedCreateWithoutBansReceivedInputObjectSchema as UserUncheckedCreateWithoutBansReceivedInputObjectSchema } from './UserUncheckedCreateWithoutBansReceivedInput.schema';
import { UserCreateOrConnectWithoutBansReceivedInputObjectSchema as UserCreateOrConnectWithoutBansReceivedInputObjectSchema } from './UserCreateOrConnectWithoutBansReceivedInput.schema';
import { UserUpsertWithoutBansReceivedInputObjectSchema as UserUpsertWithoutBansReceivedInputObjectSchema } from './UserUpsertWithoutBansReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBansReceivedInputObjectSchema as UserUpdateToOneWithWhereWithoutBansReceivedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBansReceivedInput.schema';
import { UserUpdateWithoutBansReceivedInputObjectSchema as UserUpdateWithoutBansReceivedInputObjectSchema } from './UserUpdateWithoutBansReceivedInput.schema';
import { UserUncheckedUpdateWithoutBansReceivedInputObjectSchema as UserUncheckedUpdateWithoutBansReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutBansReceivedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBansReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBansReceivedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBansReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutBansReceivedInputObjectSchema), z.lazy(() => UserUpdateWithoutBansReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansReceivedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutBansReceivedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBansReceivedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutBansReceivedNestedInput>;
export const UserUpdateOneRequiredWithoutBansReceivedNestedInputObjectZodSchema = makeSchema();
