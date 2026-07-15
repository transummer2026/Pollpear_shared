import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBlocksReceivedInputObjectSchema as UserUpdateWithoutBlocksReceivedInputObjectSchema } from './UserUpdateWithoutBlocksReceivedInput.schema';
import { UserUncheckedUpdateWithoutBlocksReceivedInputObjectSchema as UserUncheckedUpdateWithoutBlocksReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutBlocksReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutBlocksReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutBlocksReceivedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutBlocksReceivedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBlocksReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBlocksReceivedInput>;
export const UserUpdateToOneWithWhereWithoutBlocksReceivedInputObjectZodSchema = makeSchema();
