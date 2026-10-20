import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReportsReceivedInputObjectSchema as UserCreateWithoutReportsReceivedInputObjectSchema } from './UserCreateWithoutReportsReceivedInput.schema';
import { UserUncheckedCreateWithoutReportsReceivedInputObjectSchema as UserUncheckedCreateWithoutReportsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutReportsReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutReportsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportsReceivedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutReportsReceivedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReportsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutReportsReceivedInput>;
export const UserCreateOrConnectWithoutReportsReceivedInputObjectZodSchema = makeSchema();
