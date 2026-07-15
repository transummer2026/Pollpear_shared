import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutVotesInputObjectSchema as UserUpdateWithoutVotesInputObjectSchema } from './UserUpdateWithoutVotesInput.schema';
import { UserUncheckedUpdateWithoutVotesInputObjectSchema as UserUncheckedUpdateWithoutVotesInputObjectSchema } from './UserUncheckedUpdateWithoutVotesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutVotesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutVotesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutVotesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutVotesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutVotesInput>;
export const UserUpdateToOneWithWhereWithoutVotesInputObjectZodSchema = makeSchema();
