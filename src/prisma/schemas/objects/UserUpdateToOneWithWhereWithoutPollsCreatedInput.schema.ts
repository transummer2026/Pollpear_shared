import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPollsCreatedInputObjectSchema as UserUpdateWithoutPollsCreatedInputObjectSchema } from './UserUpdateWithoutPollsCreatedInput.schema';
import { UserUncheckedUpdateWithoutPollsCreatedInputObjectSchema as UserUncheckedUpdateWithoutPollsCreatedInputObjectSchema } from './UserUncheckedUpdateWithoutPollsCreatedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPollsCreatedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPollsCreatedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPollsCreatedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPollsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPollsCreatedInput>;
export const UserUpdateToOneWithWhereWithoutPollsCreatedInputObjectZodSchema = makeSchema();
