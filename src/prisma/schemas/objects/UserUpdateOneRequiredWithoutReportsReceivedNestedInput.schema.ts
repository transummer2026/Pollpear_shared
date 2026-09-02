import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutReportsReceivedInputObjectSchema as UserCreateWithoutReportsReceivedInputObjectSchema } from './UserCreateWithoutReportsReceivedInput.schema';
import { UserUncheckedCreateWithoutReportsReceivedInputObjectSchema as UserUncheckedCreateWithoutReportsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutReportsReceivedInput.schema';
import { UserCreateOrConnectWithoutReportsReceivedInputObjectSchema as UserCreateOrConnectWithoutReportsReceivedInputObjectSchema } from './UserCreateOrConnectWithoutReportsReceivedInput.schema';
import { UserUpsertWithoutReportsReceivedInputObjectSchema as UserUpsertWithoutReportsReceivedInputObjectSchema } from './UserUpsertWithoutReportsReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutReportsReceivedInputObjectSchema as UserUpdateToOneWithWhereWithoutReportsReceivedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutReportsReceivedInput.schema';
import { UserUpdateWithoutReportsReceivedInputObjectSchema as UserUpdateWithoutReportsReceivedInputObjectSchema } from './UserUpdateWithoutReportsReceivedInput.schema';
import { UserUncheckedUpdateWithoutReportsReceivedInputObjectSchema as UserUncheckedUpdateWithoutReportsReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutReportsReceivedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReportsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportsReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReportsReceivedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReportsReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutReportsReceivedInputObjectSchema), z.lazy(() => UserUpdateWithoutReportsReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReportsReceivedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutReportsReceivedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReportsReceivedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutReportsReceivedNestedInput>;
export const UserUpdateOneRequiredWithoutReportsReceivedNestedInputObjectZodSchema = makeSchema();
