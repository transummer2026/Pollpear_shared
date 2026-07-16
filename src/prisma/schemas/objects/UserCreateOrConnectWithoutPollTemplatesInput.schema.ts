import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPollTemplatesInputObjectSchema as UserCreateWithoutPollTemplatesInputObjectSchema } from './UserCreateWithoutPollTemplatesInput.schema';
import { UserUncheckedCreateWithoutPollTemplatesInputObjectSchema as UserUncheckedCreateWithoutPollTemplatesInputObjectSchema } from './UserUncheckedCreateWithoutPollTemplatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPollTemplatesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPollTemplatesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPollTemplatesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPollTemplatesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPollTemplatesInput>;
export const UserCreateOrConnectWithoutPollTemplatesInputObjectZodSchema = makeSchema();
