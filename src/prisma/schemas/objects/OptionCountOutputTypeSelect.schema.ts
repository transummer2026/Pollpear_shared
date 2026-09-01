import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCountOutputTypeCountVoteOptionsArgsObjectSchema as OptionCountOutputTypeCountVoteOptionsArgsObjectSchema } from './OptionCountOutputTypeCountVoteOptionsArgs.schema'

const makeSchema = () => z.object({
  voteOptions: z.union([z.boolean(), z.lazy(() => OptionCountOutputTypeCountVoteOptionsArgsObjectSchema)]).optional()
}).strict();
export const OptionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OptionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.OptionCountOutputTypeSelect>;
export const OptionCountOutputTypeSelectObjectZodSchema = makeSchema();
