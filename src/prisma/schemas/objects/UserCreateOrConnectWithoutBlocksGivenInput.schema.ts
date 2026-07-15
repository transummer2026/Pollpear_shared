import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBlocksGivenInputObjectSchema as UserCreateWithoutBlocksGivenInputObjectSchema } from './UserCreateWithoutBlocksGivenInput.schema';
import { UserUncheckedCreateWithoutBlocksGivenInputObjectSchema as UserUncheckedCreateWithoutBlocksGivenInputObjectSchema } from './UserUncheckedCreateWithoutBlocksGivenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutBlocksGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlocksGivenInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutBlocksGivenInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBlocksGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutBlocksGivenInput>;
export const UserCreateOrConnectWithoutBlocksGivenInputObjectZodSchema = makeSchema();
