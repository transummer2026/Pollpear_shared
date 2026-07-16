import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutVotesInputObjectSchema as UserCreateWithoutVotesInputObjectSchema } from './UserCreateWithoutVotesInput.schema';
import { UserUncheckedCreateWithoutVotesInputObjectSchema as UserUncheckedCreateWithoutVotesInputObjectSchema } from './UserUncheckedCreateWithoutVotesInput.schema';
import { UserCreateOrConnectWithoutVotesInputObjectSchema as UserCreateOrConnectWithoutVotesInputObjectSchema } from './UserCreateOrConnectWithoutVotesInput.schema';
import { UserUpsertWithoutVotesInputObjectSchema as UserUpsertWithoutVotesInputObjectSchema } from './UserUpsertWithoutVotesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutVotesInputObjectSchema as UserUpdateToOneWithWhereWithoutVotesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutVotesInput.schema';
import { UserUpdateWithoutVotesInputObjectSchema as UserUpdateWithoutVotesInputObjectSchema } from './UserUpdateWithoutVotesInput.schema';
import { UserUncheckedUpdateWithoutVotesInputObjectSchema as UserUncheckedUpdateWithoutVotesInputObjectSchema } from './UserUncheckedUpdateWithoutVotesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutVotesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVotesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVotesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutVotesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutVotesInputObjectSchema), z.lazy(() => UserUpdateWithoutVotesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutVotesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutVotesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutVotesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutVotesNestedInput>;
export const UserUpdateOneRequiredWithoutVotesNestedInputObjectZodSchema = makeSchema();
