import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportReasonSchema } from '../enums/ReportReason.schema';
import { UserCreateNestedOneWithoutReportsGivenInputObjectSchema as UserCreateNestedOneWithoutReportsGivenInputObjectSchema } from './UserCreateNestedOneWithoutReportsGivenInput.schema';
import { UserCreateNestedOneWithoutReportsReceivedInputObjectSchema as UserCreateNestedOneWithoutReportsReceivedInputObjectSchema } from './UserCreateNestedOneWithoutReportsReceivedInput.schema';
import { RoomCreateNestedOneWithoutReportsInputObjectSchema as RoomCreateNestedOneWithoutReportsInputObjectSchema } from './RoomCreateNestedOneWithoutReportsInput.schema';
import { PollCreateNestedOneWithoutReportsInputObjectSchema as PollCreateNestedOneWithoutReportsInputObjectSchema } from './PollCreateNestedOneWithoutReportsInput.schema';
import { OptionCreateNestedOneWithoutReportsInputObjectSchema as OptionCreateNestedOneWithoutReportsInputObjectSchema } from './OptionCreateNestedOneWithoutReportsInput.schema';
import { HashtagCreateNestedOneWithoutReportsInputObjectSchema as HashtagCreateNestedOneWithoutReportsInputObjectSchema } from './HashtagCreateNestedOneWithoutReportsInput.schema'

const makeSchema = () => z.object({
  reason: ReportReasonSchema,
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reporter: z.lazy(() => UserCreateNestedOneWithoutReportsGivenInputObjectSchema),
  reported: z.lazy(() => UserCreateNestedOneWithoutReportsReceivedInputObjectSchema),
  room: z.lazy(() => RoomCreateNestedOneWithoutReportsInputObjectSchema).optional(),
  poll: z.lazy(() => PollCreateNestedOneWithoutReportsInputObjectSchema).optional(),
  option: z.lazy(() => OptionCreateNestedOneWithoutReportsInputObjectSchema).optional(),
  hashtag: z.lazy(() => HashtagCreateNestedOneWithoutReportsInputObjectSchema).optional()
}).strict();
export const ReportCreateWithoutMessageInputObjectSchema: z.ZodType<Prisma.ReportCreateWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateWithoutMessageInput>;
export const ReportCreateWithoutMessageInputObjectZodSchema = makeSchema();
