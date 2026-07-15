import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutVotesInputObjectSchema as UserUpdateWithoutVotesInputObjectSchema } from './UserUpdateWithoutVotesInput.schema';
import { UserUncheckedUpdateWithoutVotesInputObjectSchema as UserUncheckedUpdateWithoutVotesInputObjectSchema } from './UserUncheckedUpdateWithoutVotesInput.schema';
import { UserCreateWithoutVotesInputObjectSchema as UserCreateWithoutVotesInputObjectSchema } from './UserCreateWithoutVotesInput.schema';
import { UserUncheckedCreateWithoutVotesInputObjectSchema as UserUncheckedCreateWithoutVotesInputObjectSchema } from './UserUncheckedCreateWithoutVotesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutVotesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutVotesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutVotesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVotesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutVotesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutVotesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutVotesInput>;
export const UserUpsertWithoutVotesInputObjectZodSchema = makeSchema();
