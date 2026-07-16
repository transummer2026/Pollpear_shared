import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutBansDoneInputObjectSchema as UserCreateWithoutBansDoneInputObjectSchema } from './UserCreateWithoutBansDoneInput.schema';
import { UserUncheckedCreateWithoutBansDoneInputObjectSchema as UserUncheckedCreateWithoutBansDoneInputObjectSchema } from './UserUncheckedCreateWithoutBansDoneInput.schema';
import { UserCreateOrConnectWithoutBansDoneInputObjectSchema as UserCreateOrConnectWithoutBansDoneInputObjectSchema } from './UserCreateOrConnectWithoutBansDoneInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutBansDoneInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutBansDoneInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBansDoneInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutBansDoneInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBansDoneInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutBansDoneInput>;
export const UserCreateNestedOneWithoutBansDoneInputObjectZodSchema = makeSchema();
