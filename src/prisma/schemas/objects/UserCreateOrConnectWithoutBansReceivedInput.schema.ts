import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBansReceivedInputObjectSchema as UserCreateWithoutBansReceivedInputObjectSchema } from './UserCreateWithoutBansReceivedInput.schema';
import { UserUncheckedCreateWithoutBansReceivedInputObjectSchema as UserUncheckedCreateWithoutBansReceivedInputObjectSchema } from './UserUncheckedCreateWithoutBansReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutBansReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansReceivedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutBansReceivedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBansReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutBansReceivedInput>;
export const UserCreateOrConnectWithoutBansReceivedInputObjectZodSchema = makeSchema();
