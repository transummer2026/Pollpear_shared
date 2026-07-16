import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutInvitationsSentInputObjectSchema as UserUpdateWithoutInvitationsSentInputObjectSchema } from './UserUpdateWithoutInvitationsSentInput.schema';
import { UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema as UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedUpdateWithoutInvitationsSentInput.schema';
import { UserCreateWithoutInvitationsSentInputObjectSchema as UserCreateWithoutInvitationsSentInputObjectSchema } from './UserCreateWithoutInvitationsSentInput.schema';
import { UserUncheckedCreateWithoutInvitationsSentInputObjectSchema as UserUncheckedCreateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsSentInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutInvitationsSentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutInvitationsSentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvitationsSentInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutInvitationsSentInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutInvitationsSentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutInvitationsSentInput>;
export const UserUpsertWithoutInvitationsSentInputObjectZodSchema = makeSchema();
