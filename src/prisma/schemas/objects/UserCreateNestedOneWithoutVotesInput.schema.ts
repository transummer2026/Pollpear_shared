import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutVotesInputObjectSchema as UserCreateWithoutVotesInputObjectSchema } from './UserCreateWithoutVotesInput.schema';
import { UserUncheckedCreateWithoutVotesInputObjectSchema as UserUncheckedCreateWithoutVotesInputObjectSchema } from './UserUncheckedCreateWithoutVotesInput.schema';
import { UserCreateOrConnectWithoutVotesInputObjectSchema as UserCreateOrConnectWithoutVotesInputObjectSchema } from './UserCreateOrConnectWithoutVotesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutVotesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVotesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVotesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutVotesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutVotesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutVotesInput>;
export const UserCreateNestedOneWithoutVotesInputObjectZodSchema = makeSchema();
