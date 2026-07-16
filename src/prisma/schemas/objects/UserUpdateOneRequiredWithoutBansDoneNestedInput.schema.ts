import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBansDoneInputObjectSchema as UserCreateWithoutBansDoneInputObjectSchema } from './UserCreateWithoutBansDoneInput.schema';
import { UserUncheckedCreateWithoutBansDoneInputObjectSchema as UserUncheckedCreateWithoutBansDoneInputObjectSchema } from './UserUncheckedCreateWithoutBansDoneInput.schema';
import { UserCreateOrConnectWithoutBansDoneInputObjectSchema as UserCreateOrConnectWithoutBansDoneInputObjectSchema } from './UserCreateOrConnectWithoutBansDoneInput.schema';
import { UserUpsertWithoutBansDoneInputObjectSchema as UserUpsertWithoutBansDoneInputObjectSchema } from './UserUpsertWithoutBansDoneInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutBansDoneInputObjectSchema as UserUpdateToOneWithWhereWithoutBansDoneInputObjectSchema } from './UserUpdateToOneWithWhereWithoutBansDoneInput.schema';
import { UserUpdateWithoutBansDoneInputObjectSchema as UserUpdateWithoutBansDoneInputObjectSchema } from './UserUpdateWithoutBansDoneInput.schema';
import { UserUncheckedUpdateWithoutBansDoneInputObjectSchema as UserUncheckedUpdateWithoutBansDoneInputObjectSchema } from './UserUncheckedUpdateWithoutBansDoneInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBansDoneInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansDoneInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBansDoneInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBansDoneInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutBansDoneInputObjectSchema), z.lazy(() => UserUpdateWithoutBansDoneInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansDoneInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutBansDoneNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBansDoneNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutBansDoneNestedInput>;
export const UserUpdateOneRequiredWithoutBansDoneNestedInputObjectZodSchema = makeSchema();
