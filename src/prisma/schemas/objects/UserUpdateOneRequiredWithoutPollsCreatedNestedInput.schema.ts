import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutPollsCreatedInputObjectSchema as UserCreateWithoutPollsCreatedInputObjectSchema } from './UserCreateWithoutPollsCreatedInput.schema';
import { UserUncheckedCreateWithoutPollsCreatedInputObjectSchema as UserUncheckedCreateWithoutPollsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutPollsCreatedInput.schema';
import { UserCreateOrConnectWithoutPollsCreatedInputObjectSchema as UserCreateOrConnectWithoutPollsCreatedInputObjectSchema } from './UserCreateOrConnectWithoutPollsCreatedInput.schema';
import { UserUpsertWithoutPollsCreatedInputObjectSchema as UserUpsertWithoutPollsCreatedInputObjectSchema } from './UserUpsertWithoutPollsCreatedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPollsCreatedInputObjectSchema as UserUpdateToOneWithWhereWithoutPollsCreatedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPollsCreatedInput.schema';
import { UserUpdateWithoutPollsCreatedInputObjectSchema as UserUpdateWithoutPollsCreatedInputObjectSchema } from './UserUpdateWithoutPollsCreatedInput.schema';
import { UserUncheckedUpdateWithoutPollsCreatedInputObjectSchema as UserUncheckedUpdateWithoutPollsCreatedInputObjectSchema } from './UserUncheckedUpdateWithoutPollsCreatedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPollsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPollsCreatedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPollsCreatedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPollsCreatedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPollsCreatedInputObjectSchema), z.lazy(() => UserUpdateWithoutPollsCreatedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPollsCreatedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPollsCreatedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPollsCreatedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPollsCreatedNestedInput>;
export const UserUpdateOneRequiredWithoutPollsCreatedNestedInputObjectZodSchema = makeSchema();
