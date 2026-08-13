import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBansGivenInputObjectSchema as UserUpdateWithoutBansGivenInputObjectSchema } from './UserUpdateWithoutBansGivenInput.schema';
import { UserUncheckedUpdateWithoutBansGivenInputObjectSchema as UserUncheckedUpdateWithoutBansGivenInputObjectSchema } from './UserUncheckedUpdateWithoutBansGivenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutBansGivenInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansGivenInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutBansGivenInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBansGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBansGivenInput>;
export const UserUpdateToOneWithWhereWithoutBansGivenInputObjectZodSchema = makeSchema();
