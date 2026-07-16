import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBansReceivedInputObjectSchema as UserCreateWithoutBansReceivedInputObjectSchema } from './UserCreateWithoutBansReceivedInput.schema';
import { UserUncheckedCreateWithoutBansReceivedInputObjectSchema as UserUncheckedCreateWithoutBansReceivedInputObjectSchema } from './UserUncheckedCreateWithoutBansReceivedInput.schema';
import { UserCreateOrConnectWithoutBansReceivedInputObjectSchema as UserCreateOrConnectWithoutBansReceivedInputObjectSchema } from './UserCreateOrConnectWithoutBansReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBansReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBansReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutBansReceivedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBansReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutBansReceivedInput>;
export const UserCreateNestedOneWithoutBansReceivedInputObjectZodSchema = makeSchema();
