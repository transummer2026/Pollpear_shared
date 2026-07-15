import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutBlocksGivenInputObjectSchema as UserCreateNestedOneWithoutBlocksGivenInputObjectSchema } from './UserCreateNestedOneWithoutBlocksGivenInput.schema';
import { UserCreateNestedOneWithoutBlocksReceivedInputObjectSchema as UserCreateNestedOneWithoutBlocksReceivedInputObjectSchema } from './UserCreateNestedOneWithoutBlocksReceivedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  blocker: z.lazy(() => UserCreateNestedOneWithoutBlocksGivenInputObjectSchema),
  blocked: z.lazy(() => UserCreateNestedOneWithoutBlocksReceivedInputObjectSchema)
}).strict();
export const BlockCreateInputObjectSchema: z.ZodType<Prisma.BlockCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockCreateInput>;
export const BlockCreateInputObjectZodSchema = makeSchema();
