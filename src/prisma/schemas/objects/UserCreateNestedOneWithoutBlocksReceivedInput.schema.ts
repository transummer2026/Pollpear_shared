import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBlocksReceivedInputObjectSchema as UserCreateWithoutBlocksReceivedInputObjectSchema } from './UserCreateWithoutBlocksReceivedInput.schema';
import { UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema as UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema } from './UserUncheckedCreateWithoutBlocksReceivedInput.schema';
import { UserCreateOrConnectWithoutBlocksReceivedInputObjectSchema as UserCreateOrConnectWithoutBlocksReceivedInputObjectSchema } from './UserCreateOrConnectWithoutBlocksReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBlocksReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlocksReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutBlocksReceivedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBlocksReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutBlocksReceivedInput>;
export const UserCreateNestedOneWithoutBlocksReceivedInputObjectZodSchema = makeSchema();
