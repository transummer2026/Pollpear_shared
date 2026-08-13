import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBansGivenInputObjectSchema as UserCreateWithoutBansGivenInputObjectSchema } from './UserCreateWithoutBansGivenInput.schema';
import { UserUncheckedCreateWithoutBansGivenInputObjectSchema as UserUncheckedCreateWithoutBansGivenInputObjectSchema } from './UserUncheckedCreateWithoutBansGivenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutBansGivenInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansGivenInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutBansGivenInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBansGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutBansGivenInput>;
export const UserCreateOrConnectWithoutBansGivenInputObjectZodSchema = makeSchema();
