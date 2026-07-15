import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPollTemplatesInputObjectSchema as UserUpdateWithoutPollTemplatesInputObjectSchema } from './UserUpdateWithoutPollTemplatesInput.schema';
import { UserUncheckedUpdateWithoutPollTemplatesInputObjectSchema as UserUncheckedUpdateWithoutPollTemplatesInputObjectSchema } from './UserUncheckedUpdateWithoutPollTemplatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPollTemplatesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPollTemplatesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPollTemplatesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPollTemplatesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPollTemplatesInput>;
export const UserUpdateToOneWithWhereWithoutPollTemplatesInputObjectZodSchema = makeSchema();
