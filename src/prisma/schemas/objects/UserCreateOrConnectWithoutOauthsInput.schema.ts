import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOauthsInputObjectSchema as UserCreateWithoutOauthsInputObjectSchema } from './UserCreateWithoutOauthsInput.schema';
import { UserUncheckedCreateWithoutOauthsInputObjectSchema as UserUncheckedCreateWithoutOauthsInputObjectSchema } from './UserUncheckedCreateWithoutOauthsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOauthsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOauthsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutOauthsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOauthsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutOauthsInput>;
export const UserCreateOrConnectWithoutOauthsInputObjectZodSchema = makeSchema();
