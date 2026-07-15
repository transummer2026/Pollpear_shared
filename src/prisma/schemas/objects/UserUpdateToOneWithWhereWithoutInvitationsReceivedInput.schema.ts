import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutInvitationsReceivedInputObjectSchema as UserUpdateWithoutInvitationsReceivedInputObjectSchema } from './UserUpdateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema as UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutInvitationsReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutInvitationsReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutInvitationsReceivedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInvitationsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInvitationsReceivedInput>;
export const UserUpdateToOneWithWhereWithoutInvitationsReceivedInputObjectZodSchema = makeSchema();
