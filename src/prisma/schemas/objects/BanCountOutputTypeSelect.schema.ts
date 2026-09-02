import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCountOutputTypeCountAttachmentsArgsObjectSchema as BanCountOutputTypeCountAttachmentsArgsObjectSchema } from './BanCountOutputTypeCountAttachmentsArgs.schema'

const makeSchema = () => z.object({
  attachments: z.union([z.boolean(), z.lazy(() => BanCountOutputTypeCountAttachmentsArgsObjectSchema)]).optional()
}).strict();
export const BanCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BanCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BanCountOutputTypeSelect>;
export const BanCountOutputTypeSelectObjectZodSchema = makeSchema();
