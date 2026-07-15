import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutInvitationsSentInputObjectSchema as UserCreateWithoutInvitationsSentInputObjectSchema } from './UserCreateWithoutInvitationsSentInput.schema';
import { UserUncheckedCreateWithoutInvitationsSentInputObjectSchema as UserUncheckedCreateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsSentInput.schema';
import { UserCreateOrConnectWithoutInvitationsSentInputObjectSchema as UserCreateOrConnectWithoutInvitationsSentInputObjectSchema } from './UserCreateOrConnectWithoutInvitationsSentInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInvitationsSentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvitationsSentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvitationsSentInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutInvitationsSentInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInvitationsSentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutInvitationsSentInput>;
export const UserCreateNestedOneWithoutInvitationsSentInputObjectZodSchema = makeSchema();
