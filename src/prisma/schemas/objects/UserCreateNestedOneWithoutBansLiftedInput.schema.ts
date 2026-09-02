import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBansLiftedInputObjectSchema as UserCreateWithoutBansLiftedInputObjectSchema } from './UserCreateWithoutBansLiftedInput.schema';
import { UserUncheckedCreateWithoutBansLiftedInputObjectSchema as UserUncheckedCreateWithoutBansLiftedInputObjectSchema } from './UserUncheckedCreateWithoutBansLiftedInput.schema';
import { UserCreateOrConnectWithoutBansLiftedInputObjectSchema as UserCreateOrConnectWithoutBansLiftedInputObjectSchema } from './UserCreateOrConnectWithoutBansLiftedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBansLiftedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansLiftedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBansLiftedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutBansLiftedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBansLiftedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutBansLiftedInput>;
export const UserCreateNestedOneWithoutBansLiftedInputObjectZodSchema = makeSchema();
