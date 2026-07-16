import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPollsCreatedInputObjectSchema as UserCreateWithoutPollsCreatedInputObjectSchema } from './UserCreateWithoutPollsCreatedInput.schema';
import { UserUncheckedCreateWithoutPollsCreatedInputObjectSchema as UserUncheckedCreateWithoutPollsCreatedInputObjectSchema } from './UserUncheckedCreateWithoutPollsCreatedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPollsCreatedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPollsCreatedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPollsCreatedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPollsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPollsCreatedInput>;
export const UserCreateOrConnectWithoutPollsCreatedInputObjectZodSchema = makeSchema();
