import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutInvitationsReceivedInputObjectSchema as UserCreateWithoutInvitationsReceivedInputObjectSchema } from './UserCreateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema as UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsReceivedInput.schema';
import { UserCreateOrConnectWithoutInvitationsReceivedInputObjectSchema as UserCreateOrConnectWithoutInvitationsReceivedInputObjectSchema } from './UserCreateOrConnectWithoutInvitationsReceivedInput.schema';
import { UserUpsertWithoutInvitationsReceivedInputObjectSchema as UserUpsertWithoutInvitationsReceivedInputObjectSchema } from './UserUpsertWithoutInvitationsReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutInvitationsReceivedInputObjectSchema as UserUpdateToOneWithWhereWithoutInvitationsReceivedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutInvitationsReceivedInput.schema';
import { UserUpdateWithoutInvitationsReceivedInputObjectSchema as UserUpdateWithoutInvitationsReceivedInputObjectSchema } from './UserUpdateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema as UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutInvitationsReceivedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInvitationsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvitationsReceivedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInvitationsReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutInvitationsReceivedInputObjectSchema), z.lazy(() => UserUpdateWithoutInvitationsReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvitationsReceivedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutInvitationsReceivedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutInvitationsReceivedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutInvitationsReceivedNestedInput>;
export const UserUpdateOneRequiredWithoutInvitationsReceivedNestedInputObjectZodSchema = makeSchema();
