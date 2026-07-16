import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OptionWhereInputObjectSchema).optional()
}).strict();
export const PollCountOutputTypeCountOptionsArgsObjectSchema = makeSchema();
export const PollCountOutputTypeCountOptionsArgsObjectZodSchema = makeSchema();
