import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutReportsGivenInputObjectSchema as UserUpdateWithoutReportsGivenInputObjectSchema } from './UserUpdateWithoutReportsGivenInput.schema';
import { UserUncheckedUpdateWithoutReportsGivenInputObjectSchema as UserUncheckedUpdateWithoutReportsGivenInputObjectSchema } from './UserUncheckedUpdateWithoutReportsGivenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutReportsGivenInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReportsGivenInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutReportsGivenInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReportsGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReportsGivenInput>;
export const UserUpdateToOneWithWhereWithoutReportsGivenInputObjectZodSchema = makeSchema();
