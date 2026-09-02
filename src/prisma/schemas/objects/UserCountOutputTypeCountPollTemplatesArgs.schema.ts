import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateWhereInputObjectSchema as PollTemplateWhereInputObjectSchema } from './PollTemplateWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollTemplateWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountPollTemplatesArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountPollTemplatesArgsObjectZodSchema = makeSchema();
