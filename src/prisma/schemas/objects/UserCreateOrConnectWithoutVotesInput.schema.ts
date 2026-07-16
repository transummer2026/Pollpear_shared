import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutVotesInputObjectSchema as UserCreateWithoutVotesInputObjectSchema } from './UserCreateWithoutVotesInput.schema';
import { UserUncheckedCreateWithoutVotesInputObjectSchema as UserUncheckedCreateWithoutVotesInputObjectSchema } from './UserUncheckedCreateWithoutVotesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutVotesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutVotesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutVotesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutVotesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutVotesInput>;
export const UserCreateOrConnectWithoutVotesInputObjectZodSchema = makeSchema();
