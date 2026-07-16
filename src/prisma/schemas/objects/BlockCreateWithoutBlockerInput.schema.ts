import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutBlocksReceivedInputObjectSchema as UserCreateNestedOneWithoutBlocksReceivedInputObjectSchema } from './UserCreateNestedOneWithoutBlocksReceivedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blocked: z.lazy(() => UserCreateNestedOneWithoutBlocksReceivedInputObjectSchema)
}).strict();
export const BlockCreateWithoutBlockerInputObjectSchema: z.ZodType<Prisma.BlockCreateWithoutBlockerInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockCreateWithoutBlockerInput>;
export const BlockCreateWithoutBlockerInputObjectZodSchema = makeSchema();
