import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBansLiftedInputObjectSchema as UserCreateWithoutBansLiftedInputObjectSchema } from './UserCreateWithoutBansLiftedInput.schema';
import { UserUncheckedCreateWithoutBansLiftedInputObjectSchema as UserUncheckedCreateWithoutBansLiftedInputObjectSchema } from './UserUncheckedCreateWithoutBansLiftedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutBansLiftedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansLiftedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutBansLiftedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBansLiftedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutBansLiftedInput>;
export const UserCreateOrConnectWithoutBansLiftedInputObjectZodSchema = makeSchema();
