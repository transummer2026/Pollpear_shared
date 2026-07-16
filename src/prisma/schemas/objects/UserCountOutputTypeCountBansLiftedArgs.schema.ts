import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './BanWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountBansLiftedArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountBansLiftedArgsObjectZodSchema = makeSchema();
