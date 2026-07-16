import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBansDoneInputObjectSchema as UserUpdateWithoutBansDoneInputObjectSchema } from './UserUpdateWithoutBansDoneInput.schema';
import { UserUncheckedUpdateWithoutBansDoneInputObjectSchema as UserUncheckedUpdateWithoutBansDoneInputObjectSchema } from './UserUncheckedUpdateWithoutBansDoneInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutBansDoneInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansDoneInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutBansDoneInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBansDoneInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBansDoneInput>;
export const UserUpdateToOneWithWhereWithoutBansDoneInputObjectZodSchema = makeSchema();
