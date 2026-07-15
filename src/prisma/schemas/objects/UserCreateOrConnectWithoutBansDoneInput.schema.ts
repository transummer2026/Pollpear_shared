import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBansDoneInputObjectSchema as UserCreateWithoutBansDoneInputObjectSchema } from './UserCreateWithoutBansDoneInput.schema';
import { UserUncheckedCreateWithoutBansDoneInputObjectSchema as UserUncheckedCreateWithoutBansDoneInputObjectSchema } from './UserUncheckedCreateWithoutBansDoneInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutBansDoneInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansDoneInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutBansDoneInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBansDoneInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutBansDoneInput>;
export const UserCreateOrConnectWithoutBansDoneInputObjectZodSchema = makeSchema();
