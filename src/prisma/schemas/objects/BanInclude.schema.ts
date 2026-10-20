import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { BanAttachmentFindManySchema as BanAttachmentFindManySchema } from '../findManyBanAttachment.schema';
import { BanCountOutputTypeArgsObjectSchema as BanCountOutputTypeArgsObjectSchema } from './BanCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  bannedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  unbannedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  attachments: z.union([z.boolean(), z.lazy(() => BanAttachmentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BanCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BanIncludeObjectSchema: z.ZodType<Prisma.BanInclude> = makeSchema() as unknown as z.ZodType<Prisma.BanInclude>;
export const BanIncludeObjectZodSchema = makeSchema();
