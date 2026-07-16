import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutInvitationsReceivedInputObjectSchema as UserCreateWithoutInvitationsReceivedInputObjectSchema } from './UserCreateWithoutInvitationsReceivedInput.schema';
import { UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema as UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutInvitationsReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutInvitationsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvitationsReceivedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutInvitationsReceivedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInvitationsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutInvitationsReceivedInput>;
export const UserCreateOrConnectWithoutInvitationsReceivedInputObjectZodSchema = makeSchema();
