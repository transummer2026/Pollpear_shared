import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutPollTemplatesInputObjectSchema as UserCreateWithoutPollTemplatesInputObjectSchema } from './UserCreateWithoutPollTemplatesInput.schema';
import { UserUncheckedCreateWithoutPollTemplatesInputObjectSchema as UserUncheckedCreateWithoutPollTemplatesInputObjectSchema } from './UserUncheckedCreateWithoutPollTemplatesInput.schema';
import { UserCreateOrConnectWithoutPollTemplatesInputObjectSchema as UserCreateOrConnectWithoutPollTemplatesInputObjectSchema } from './UserCreateOrConnectWithoutPollTemplatesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPollTemplatesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPollTemplatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPollTemplatesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPollTemplatesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPollTemplatesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPollTemplatesInput>;
export const UserCreateNestedOneWithoutPollTemplatesInputObjectZodSchema = makeSchema();
