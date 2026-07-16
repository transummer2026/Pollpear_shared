import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutInvitationsReceivedInputObjectSchema as UserCreateWithoutInvitationsReceivedInputObjectSchema } from './UserCreateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema as UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsReceivedInput.schema';
import { UserCreateOrConnectWithoutInvitationsReceivedInputObjectSchema as UserCreateOrConnectWithoutInvitationsReceivedInputObjectSchema } from './UserCreateOrConnectWithoutInvitationsReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInvitationsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvitationsReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutInvitationsReceivedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInvitationsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutInvitationsReceivedInput>;
export const UserCreateNestedOneWithoutInvitationsReceivedInputObjectZodSchema = makeSchema();
