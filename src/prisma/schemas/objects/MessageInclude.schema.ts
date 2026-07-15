import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RoomArgsObjectSchema as RoomArgsObjectSchema } from './RoomArgs.schema';
import { ReportFindManySchema as ReportFindManySchema } from '../findManyReport.schema';
import { MessageCountOutputTypeArgsObjectSchema as MessageCountOutputTypeArgsObjectSchema } from './MessageCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  room: z.union([z.boolean(), z.lazy(() => RoomArgsObjectSchema)]).optional(),
  reports: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MessageCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MessageIncludeObjectSchema: z.ZodType<Prisma.MessageInclude> = makeSchema() as unknown as z.ZodType<Prisma.MessageInclude>;
export const MessageIncludeObjectZodSchema = makeSchema();
