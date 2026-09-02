import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutReportsReceivedInputObjectSchema as UserCreateWithoutReportsReceivedInputObjectSchema } from './UserCreateWithoutReportsReceivedInput.schema';
import { UserUncheckedCreateWithoutReportsReceivedInputObjectSchema as UserUncheckedCreateWithoutReportsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutReportsReceivedInput.schema';
import { UserCreateOrConnectWithoutReportsReceivedInputObjectSchema as UserCreateOrConnectWithoutReportsReceivedInputObjectSchema } from './UserCreateOrConnectWithoutReportsReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReportsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportsReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReportsReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutReportsReceivedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReportsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutReportsReceivedInput>;
export const UserCreateNestedOneWithoutReportsReceivedInputObjectZodSchema = makeSchema();
