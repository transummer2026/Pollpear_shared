import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutPollTemplatesInputObjectSchema as UserCreateWithoutPollTemplatesInputObjectSchema } from './UserCreateWithoutPollTemplatesInput.schema';
import { UserUncheckedCreateWithoutPollTemplatesInputObjectSchema as UserUncheckedCreateWithoutPollTemplatesInputObjectSchema } from './UserUncheckedCreateWithoutPollTemplatesInput.schema';
import { UserCreateOrConnectWithoutPollTemplatesInputObjectSchema as UserCreateOrConnectWithoutPollTemplatesInputObjectSchema } from './UserCreateOrConnectWithoutPollTemplatesInput.schema';
import { UserUpsertWithoutPollTemplatesInputObjectSchema as UserUpsertWithoutPollTemplatesInputObjectSchema } from './UserUpsertWithoutPollTemplatesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPollTemplatesInputObjectSchema as UserUpdateToOneWithWhereWithoutPollTemplatesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPollTemplatesInput.schema';
import { UserUpdateWithoutPollTemplatesInputObjectSchema as UserUpdateWithoutPollTemplatesInputObjectSchema } from './UserUpdateWithoutPollTemplatesInput.schema';
import { UserUncheckedUpdateWithoutPollTemplatesInputObjectSchema as UserUncheckedUpdateWithoutPollTemplatesInputObjectSchema } from './UserUncheckedUpdateWithoutPollTemplatesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPollTemplatesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPollTemplatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPollTemplatesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPollTemplatesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPollTemplatesInputObjectSchema), z.lazy(() => UserUpdateWithoutPollTemplatesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPollTemplatesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPollTemplatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPollTemplatesNestedInput>;
export const UserUpdateOneRequiredWithoutPollTemplatesNestedInputObjectZodSchema = makeSchema();
