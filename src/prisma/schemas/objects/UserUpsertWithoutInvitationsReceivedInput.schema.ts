import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutInvitationsReceivedInputObjectSchema as UserUpdateWithoutInvitationsReceivedInputObjectSchema } from './UserUpdateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema as UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutInvitationsReceivedInput.schema';
import { UserCreateWithoutInvitationsReceivedInputObjectSchema as UserCreateWithoutInvitationsReceivedInputObjectSchema } from './UserCreateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema as UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsReceivedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutInvitationsReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutInvitationsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutInvitationsReceivedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutInvitationsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutInvitationsReceivedInput>;
export const UserUpsertWithoutInvitationsReceivedInputObjectZodSchema = makeSchema();
