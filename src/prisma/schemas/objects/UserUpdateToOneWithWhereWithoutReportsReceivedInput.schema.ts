import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutReportsReceivedInputObjectSchema as UserUpdateWithoutReportsReceivedInputObjectSchema } from './UserUpdateWithoutReportsReceivedInput.schema';
import { UserUncheckedUpdateWithoutReportsReceivedInputObjectSchema as UserUncheckedUpdateWithoutReportsReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutReportsReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutReportsReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReportsReceivedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutReportsReceivedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReportsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReportsReceivedInput>;
export const UserUpdateToOneWithWhereWithoutReportsReceivedInputObjectZodSchema = makeSchema();
