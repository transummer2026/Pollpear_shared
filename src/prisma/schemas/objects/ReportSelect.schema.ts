import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RoomArgsObjectSchema as RoomArgsObjectSchema } from './RoomArgs.schema';
import { MessageArgsObjectSchema as MessageArgsObjectSchema } from './MessageArgs.schema';
import { PollArgsObjectSchema as PollArgsObjectSchema } from './PollArgs.schema';
import { OptionArgsObjectSchema as OptionArgsObjectSchema } from './OptionArgs.schema';
import { HashtagArgsObjectSchema as HashtagArgsObjectSchema } from './HashtagArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  reason: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  reporterId: z.boolean().optional(),
  reportedId: z.boolean().optional(),
  roomId: z.boolean().optional(),
  messageId: z.boolean().optional(),
  pollId: z.boolean().optional(),
  optionId: z.boolean().optional(),
  hashtagId: z.boolean().optional(),
  reporter: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  reported: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  room: z.union([z.boolean(), z.lazy(() => RoomArgsObjectSchema)]).optional(),
  message: z.union([z.boolean(), z.lazy(() => MessageArgsObjectSchema)]).optional(),
  poll: z.union([z.boolean(), z.lazy(() => PollArgsObjectSchema)]).optional(),
  option: z.union([z.boolean(), z.lazy(() => OptionArgsObjectSchema)]).optional(),
  hashtag: z.union([z.boolean(), z.lazy(() => HashtagArgsObjectSchema)]).optional()
}).strict();
export const ReportSelectObjectSchema: z.ZodType<Prisma.ReportSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportSelect>;
export const ReportSelectObjectZodSchema = makeSchema();
