import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutOauthsInputObjectSchema as UserUpdateWithoutOauthsInputObjectSchema } from './UserUpdateWithoutOauthsInput.schema';
import { UserUncheckedUpdateWithoutOauthsInputObjectSchema as UserUncheckedUpdateWithoutOauthsInputObjectSchema } from './UserUncheckedUpdateWithoutOauthsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutOauthsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOauthsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutOauthsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOauthsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOauthsInput>;
export const UserUpdateToOneWithWhereWithoutOauthsInputObjectZodSchema = makeSchema();
