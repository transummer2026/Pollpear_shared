import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutOauthsInputObjectSchema as UserCreateWithoutOauthsInputObjectSchema } from './UserCreateWithoutOauthsInput.schema';
import { UserUncheckedCreateWithoutOauthsInputObjectSchema as UserUncheckedCreateWithoutOauthsInputObjectSchema } from './UserUncheckedCreateWithoutOauthsInput.schema';
import { UserCreateOrConnectWithoutOauthsInputObjectSchema as UserCreateOrConnectWithoutOauthsInputObjectSchema } from './UserCreateOrConnectWithoutOauthsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOauthsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOauthsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOauthsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutOauthsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOauthsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutOauthsInput>;
export const UserCreateNestedOneWithoutOauthsInputObjectZodSchema = makeSchema();
