import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutReportsGivenInputObjectSchema as UserCreateWithoutReportsGivenInputObjectSchema } from './UserCreateWithoutReportsGivenInput.schema';
import { UserUncheckedCreateWithoutReportsGivenInputObjectSchema as UserUncheckedCreateWithoutReportsGivenInputObjectSchema } from './UserUncheckedCreateWithoutReportsGivenInput.schema';
import { UserCreateOrConnectWithoutReportsGivenInputObjectSchema as UserCreateOrConnectWithoutReportsGivenInputObjectSchema } from './UserCreateOrConnectWithoutReportsGivenInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReportsGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportsGivenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReportsGivenInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutReportsGivenInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReportsGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutReportsGivenInput>;
export const UserCreateNestedOneWithoutReportsGivenInputObjectZodSchema = makeSchema();
