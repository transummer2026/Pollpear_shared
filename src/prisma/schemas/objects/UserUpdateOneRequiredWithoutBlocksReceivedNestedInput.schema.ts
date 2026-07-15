import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBlocksReceivedInputObjectSchema as UserCreateWithoutBlocksReceivedInputObjectSchema } from './UserCreateWithoutBlocksReceivedInput.schema';
import { UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema as UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema } from './UserUncheckedCreateWithoutBlocksReceivedInput.schema';
import { UserCreateOrConnectWithoutBlocksReceivedInputObjectSchema as UserCreateOrConnectWithoutBlocksReceivedInputObjectSchema } from './UserCreateOrConnectWithoutBlocksReceivedInput.schema';
import { UserUpsertWithoutBlocksReceivedInputObjectSchema as UserUpsertWithoutBlocksReceivedInputObjectSchema } from './UserUpsertWithoutBlocksReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBlocksReceivedInputObjectSchema as UserUpdateToOneWithWhereWithoutBlocksReceivedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBlocksReceivedInput.schema';
import { UserUpdateWithoutBlocksReceivedInputObjectSchema as UserUpdateWithoutBlocksReceivedInputObjectSchema } from './UserUpdateWithoutBlocksReceivedInput.schema';
import { UserUncheckedUpdateWithoutBlocksReceivedInputObjectSchema as UserUncheckedUpdateWithoutBlocksReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutBlocksReceivedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBlocksReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlocksReceivedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBlocksReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutBlocksReceivedInputObjectSchema), z.lazy(() => UserUpdateWithoutBlocksReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBlocksReceivedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutBlocksReceivedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBlocksReceivedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutBlocksReceivedNestedInput>;
export const UserUpdateOneRequiredWithoutBlocksReceivedNestedInputObjectZodSchema = makeSchema();
