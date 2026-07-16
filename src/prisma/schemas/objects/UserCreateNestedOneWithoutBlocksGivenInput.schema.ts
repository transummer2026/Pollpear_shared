import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBlocksGivenInputObjectSchema as UserCreateWithoutBlocksGivenInputObjectSchema } from './UserCreateWithoutBlocksGivenInput.schema';
import { UserUncheckedCreateWithoutBlocksGivenInputObjectSchema as UserUncheckedCreateWithoutBlocksGivenInputObjectSchema } from './UserUncheckedCreateWithoutBlocksGivenInput.schema';
import { UserCreateOrConnectWithoutBlocksGivenInputObjectSchema as UserCreateOrConnectWithoutBlocksGivenInputObjectSchema } from './UserCreateOrConnectWithoutBlocksGivenInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBlocksGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlocksGivenInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlocksGivenInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutBlocksGivenInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBlocksGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutBlocksGivenInput>;
export const UserCreateNestedOneWithoutBlocksGivenInputObjectZodSchema = makeSchema();
