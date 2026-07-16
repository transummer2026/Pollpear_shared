import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockWhereInputObjectSchema as BlockWhereInputObjectSchema } from './BlockWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlockWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountBlocksReceivedArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountBlocksReceivedArgsObjectZodSchema = makeSchema();
