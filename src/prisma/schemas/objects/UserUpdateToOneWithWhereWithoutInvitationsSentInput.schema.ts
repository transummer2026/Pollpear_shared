import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutInvitationsSentInputObjectSchema as UserUpdateWithoutInvitationsSentInputObjectSchema } from './UserUpdateWithoutInvitationsSentInput.schema';
import { UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema as UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedUpdateWithoutInvitationsSentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutInvitationsSentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvitationsSentInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutInvitationsSentInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInvitationsSentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInvitationsSentInput>;
export const UserUpdateToOneWithWhereWithoutInvitationsSentInputObjectZodSchema = makeSchema();
