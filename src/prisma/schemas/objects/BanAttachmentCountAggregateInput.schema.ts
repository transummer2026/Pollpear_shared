import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  attachmentUrl: z.literal(true).optional(),
  banId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BanAttachmentCountAggregateInputObjectSchema: z.ZodType<Prisma.BanAttachmentCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentCountAggregateInputType>;
export const BanAttachmentCountAggregateInputObjectZodSchema = makeSchema();
