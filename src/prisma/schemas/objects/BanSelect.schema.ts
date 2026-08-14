import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { BanAttachmentFindManySchema as BanAttachmentFindManySchema } from '../findManyBanAttachment.schema';
import { BanCountOutputTypeArgsObjectSchema as BanCountOutputTypeArgsObjectSchema } from './BanCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  banReason: z.boolean().optional(),
  unbanReason: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  endedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  bannedById: z.boolean().optional(),
  unbannedById: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  bannedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  unbannedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  attachments: z.union([z.boolean(), z.lazy(() => BanAttachmentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BanCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BanSelectObjectSchema: z.ZodType<Prisma.BanSelect> = makeSchema() as unknown as z.ZodType<Prisma.BanSelect>;
export const BanSelectObjectZodSchema = makeSchema();
