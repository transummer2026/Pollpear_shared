import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBansGivenInputObjectSchema as UserCreateWithoutBansGivenInputObjectSchema } from './UserCreateWithoutBansGivenInput.schema';
import { UserUncheckedCreateWithoutBansGivenInputObjectSchema as UserUncheckedCreateWithoutBansGivenInputObjectSchema } from './UserUncheckedCreateWithoutBansGivenInput.schema';
import { UserCreateOrConnectWithoutBansGivenInputObjectSchema as UserCreateOrConnectWithoutBansGivenInputObjectSchema } from './UserCreateOrConnectWithoutBansGivenInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBansGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansGivenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBansGivenInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutBansGivenInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBansGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutBansGivenInput>;
export const UserCreateNestedOneWithoutBansGivenInputObjectZodSchema = makeSchema();
