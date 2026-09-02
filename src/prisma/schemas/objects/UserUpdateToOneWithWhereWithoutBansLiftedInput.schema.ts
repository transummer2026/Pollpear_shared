import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBansLiftedInputObjectSchema as UserUpdateWithoutBansLiftedInputObjectSchema } from './UserUpdateWithoutBansLiftedInput.schema';
import { UserUncheckedUpdateWithoutBansLiftedInputObjectSchema as UserUncheckedUpdateWithoutBansLiftedInputObjectSchema } from './UserUncheckedUpdateWithoutBansLiftedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutBansLiftedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansLiftedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutBansLiftedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBansLiftedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBansLiftedInput>;
export const UserUpdateToOneWithWhereWithoutBansLiftedInputObjectZodSchema = makeSchema();
