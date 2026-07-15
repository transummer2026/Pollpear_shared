import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutPollsCreatedInputObjectSchema as UserCreateWithoutPollsCreatedInputObjectSchema } from './UserCreateWithoutPollsCreatedInput.schema';
import { UserUncheckedCreateWithoutPollsCreatedInputObjectSchema as UserUncheckedCreateWithoutPollsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutPollsCreatedInput.schema';
import { UserCreateOrConnectWithoutPollsCreatedInputObjectSchema as UserCreateOrConnectWithoutPollsCreatedInputObjectSchema } from './UserCreateOrConnectWithoutPollsCreatedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPollsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPollsCreatedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPollsCreatedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPollsCreatedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPollsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPollsCreatedInput>;
export const UserCreateNestedOneWithoutPollsCreatedInputObjectZodSchema = makeSchema();
