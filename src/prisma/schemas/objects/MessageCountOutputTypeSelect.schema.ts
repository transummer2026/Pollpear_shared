import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageCountOutputTypeCountReportsArgsObjectSchema as MessageCountOutputTypeCountReportsArgsObjectSchema } from './MessageCountOutputTypeCountReportsArgs.schema'

const makeSchema = () => z.object({
  reports: z.union([z.boolean(), z.lazy(() => MessageCountOutputTypeCountReportsArgsObjectSchema)]).optional()
}).strict();
export const MessageCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MessageCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MessageCountOutputTypeSelect>;
export const MessageCountOutputTypeSelectObjectZodSchema = makeSchema();
