import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBlocksGivenInputObjectSchema as UserUpdateWithoutBlocksGivenInputObjectSchema } from './UserUpdateWithoutBlocksGivenInput.schema';
import { UserUncheckedUpdateWithoutBlocksGivenInputObjectSchema as UserUncheckedUpdateWithoutBlocksGivenInputObjectSchema } from './UserUncheckedUpdateWithoutBlocksGivenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutBlocksGivenInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBlocksGivenInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutBlocksGivenInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBlocksGivenInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBlocksGivenInput>;
export const UserUpdateToOneWithWhereWithoutBlocksGivenInputObjectZodSchema = makeSchema();
