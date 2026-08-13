import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RoomArgsObjectSchema as RoomArgsObjectSchema } from './RoomArgs.schema';
import { VoteFindManySchema as VoteFindManySchema } from '../findManyVote.schema';
import { OptionFindManySchema as OptionFindManySchema } from '../findManyOption.schema';
import { PollHashtagFindManySchema as PollHashtagFindManySchema } from '../findManyPollHashtag.schema';
import { PollTemplateFindManySchema as PollTemplateFindManySchema } from '../findManyPollTemplate.schema';
import { ReportFindManySchema as ReportFindManySchema } from '../findManyReport.schema';
import { PollDependencyFindManySchema as PollDependencyFindManySchema } from '../findManyPollDependency.schema';
import { PollCountOutputTypeArgsObjectSchema as PollCountOutputTypeArgsObjectSchema } from './PollCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  type: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  publishedAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  endsAt: z.boolean().optional(),
  visibility: z.boolean().optional(),
  allowChangeVote: z.boolean().optional(),
  isAnonymous: z.boolean().optional(),
  status: z.boolean().optional(),
  createdById: z.boolean().optional(),
  roomId: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  room: z.union([z.boolean(), z.lazy(() => RoomArgsObjectSchema)]).optional(),
  votes: z.union([z.boolean(), z.lazy(() => VoteFindManySchema)]).optional(),
  options: z.union([z.boolean(), z.lazy(() => OptionFindManySchema)]).optional(),
  pollHashtags: z.union([z.boolean(), z.lazy(() => PollHashtagFindManySchema)]).optional(),
  pollTemplates: z.union([z.boolean(), z.lazy(() => PollTemplateFindManySchema)]).optional(),
  reports: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  childDependencies: z.union([z.boolean(), z.lazy(() => PollDependencyFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PollCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PollSelectObjectSchema: z.ZodType<Prisma.PollSelect> = makeSchema() as unknown as z.ZodType<Prisma.PollSelect>;
export const PollSelectObjectZodSchema = makeSchema();
