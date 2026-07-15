import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutInvitationsSentInputObjectSchema as UserCreateWithoutInvitationsSentInputObjectSchema } from './UserCreateWithoutInvitationsSentInput.schema';
import { UserUncheckedCreateWithoutInvitationsSentInputObjectSchema as UserUncheckedCreateWithoutInvitationsSentInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsSentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutInvitationsSentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvitationsSentInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutInvitationsSentInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInvitationsSentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutInvitationsSentInput>;
export const UserCreateOrConnectWithoutInvitationsSentInputObjectZodSchema = makeSchema();
