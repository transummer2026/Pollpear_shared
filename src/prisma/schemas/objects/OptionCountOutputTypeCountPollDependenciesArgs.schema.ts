import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyWhereInputObjectSchema as PollDependencyWhereInputObjectSchema } from './PollDependencyWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollDependencyWhereInputObjectSchema).optional()
}).strict();
export const OptionCountOutputTypeCountPollDependenciesArgsObjectSchema = makeSchema();
export const OptionCountOutputTypeCountPollDependenciesArgsObjectZodSchema = makeSchema();
