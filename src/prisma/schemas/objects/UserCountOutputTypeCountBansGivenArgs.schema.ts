import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './BanWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountBansGivenArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountBansGivenArgsObjectZodSchema = makeSchema();
