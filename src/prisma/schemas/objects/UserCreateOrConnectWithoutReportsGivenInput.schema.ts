import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReportsGivenInputObjectSchema as UserCreateWithoutReportsGivenInputObjectSchema } from './UserCreateWithoutReportsGivenInput.schema';
import { UserUncheckedCreateWithoutReportsGivenInputObjectSchema as UserUncheckedCreateWithoutReportsGivenInputObjectSchema } from './UserUncheckedCreateWithoutReportsGivenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutReportsGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReportsGivenInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutReportsGivenInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReportsGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutReportsGivenInput>;
export const UserCreateOrConnectWithoutReportsGivenInputObjectZodSchema = makeSchema();
