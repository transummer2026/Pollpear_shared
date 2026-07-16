import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBlocksReceivedInputObjectSchema as UserCreateWithoutBlocksReceivedInputObjectSchema } from './UserCreateWithoutBlocksReceivedInput.schema';
import { UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema as UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema } from './UserUncheckedCreateWithoutBlocksReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutBlocksReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBlocksReceivedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutBlocksReceivedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBlocksReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutBlocksReceivedInput>;
export const UserCreateOrConnectWithoutBlocksReceivedInputObjectZodSchema = makeSchema();
