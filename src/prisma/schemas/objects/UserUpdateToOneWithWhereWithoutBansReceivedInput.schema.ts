import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBansReceivedInputObjectSchema as UserUpdateWithoutBansReceivedInputObjectSchema } from './UserUpdateWithoutBansReceivedInput.schema';
import { UserUncheckedUpdateWithoutBansReceivedInputObjectSchema as UserUncheckedUpdateWithoutBansReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutBansReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutBansReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBansReceivedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutBansReceivedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBansReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBansReceivedInput>;
export const UserUpdateToOneWithWhereWithoutBansReceivedInputObjectZodSchema = makeSchema();
