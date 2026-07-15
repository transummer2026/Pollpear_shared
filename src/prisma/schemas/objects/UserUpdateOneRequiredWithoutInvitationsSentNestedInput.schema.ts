import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutInvitationsSentInputObjectSchema as UserCreateWithoutInvitationsSentInputObjectSchema } from './UserCreateWithoutInvitationsSentInput.schema';
import { UserUncheckedCreateWithoutInvitationsSentInputObjectSchema as UserUncheckedCreateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsSentInput.schema';
import { UserCreateOrConnectWithoutInvitationsSentInputObjectSchema as UserCreateOrConnectWithoutInvitationsSentInputObjectSchema } from './UserCreateOrConnectWithoutInvitationsSentInput.schema';
import { UserUpsertWithoutInvitationsSentInputObjectSchema as UserUpsertWithoutInvitationsSentInputObjectSchema } from './UserUpsertWithoutInvitationsSentInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutInvitationsSentInputObjectSchema as UserUpdateToOneWithWhereWithoutInvitationsSentInputObjectSchema } from './UserUpdateToOneWithWhereWithoutInvitationsSentInput.schema';
import { UserUpdateWithoutInvitationsSentInputObjectSchema as UserUpdateWithoutInvitationsSentInputObjectSchema } from './UserUpdateWithoutInvitationsSentInput.schema';
import { UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema as UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedUpdateWithoutInvitationsSentInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInvitationsSentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvitationsSentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvitationsSentInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInvitationsSentInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutInvitationsSentInputObjectSchema), z.lazy(() => UserUpdateWithoutInvitationsSentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutInvitationsSentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutInvitationsSentNestedInput>;
export const UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectZodSchema = makeSchema();
