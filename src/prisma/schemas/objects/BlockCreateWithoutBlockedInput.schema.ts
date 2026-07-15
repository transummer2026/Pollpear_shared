import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutBlocksGivenInputObjectSchema as UserCreateNestedOneWithoutBlocksGivenInputObjectSchema } from './UserCreateNestedOneWithoutBlocksGivenInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blocker: z.lazy(() => UserCreateNestedOneWithoutBlocksGivenInputObjectSchema)
}).strict();
export const BlockCreateWithoutBlockedInputObjectSchema: z.ZodType<Prisma.BlockCreateWithoutBlockedInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockCreateWithoutBlockedInput>;
export const BlockCreateWithoutBlockedInputObjectZodSchema = makeSchema();
