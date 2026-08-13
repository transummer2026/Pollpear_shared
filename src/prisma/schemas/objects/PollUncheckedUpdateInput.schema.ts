import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PollTypeSchema } from '../enums/PollType.schema';
import { EnumPollTypeFieldUpdateOperationsInputObjectSchema as EnumPollTypeFieldUpdateOperationsInputObjectSchema } from './EnumPollTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumVisibilityFieldUpdateOperationsInputObjectSchema as EnumVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumVisibilityFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { EnumPollStatusFieldUpdateOperationsInputObjectSchema as EnumPollStatusFieldUpdateOperationsInputObjectSchema } from './EnumPollStatusFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { VoteUncheckedUpdateManyWithoutPollNestedInputObjectSchema as VoteUncheckedUpdateManyWithoutPollNestedInputObjectSchema } from './VoteUncheckedUpdateManyWithoutPollNestedInput.schema';
import { OptionUncheckedUpdateManyWithoutPollNestedInputObjectSchema as OptionUncheckedUpdateManyWithoutPollNestedInputObjectSchema } from './OptionUncheckedUpdateManyWithoutPollNestedInput.schema';
import { PollHashtagUncheckedUpdateManyWithoutPollNestedInputObjectSchema as PollHashtagUncheckedUpdateManyWithoutPollNestedInputObjectSchema } from './PollHashtagUncheckedUpdateManyWithoutPollNestedInput.schema';
import { PollTemplateUncheckedUpdateManyWithoutPollNestedInputObjectSchema as PollTemplateUncheckedUpdateManyWithoutPollNestedInputObjectSchema } from './PollTemplateUncheckedUpdateManyWithoutPollNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutPollNestedInputObjectSchema as ReportUncheckedUpdateManyWithoutPollNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutPollNestedInput.schema';
import { PollDependencyUncheckedUpdateManyWithoutChildPollNestedInputObjectSchema as PollDependencyUncheckedUpdateManyWithoutChildPollNestedInputObjectSchema } from './PollDependencyUncheckedUpdateManyWithoutChildPollNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([PollTypeSchema, z.lazy(() => EnumPollTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  publishedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  visibility: z.union([VisibilitySchema, z.lazy(() => EnumVisibilityFieldUpdateOperationsInputObjectSchema)]).optional(),
  allowChangeVote: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isAnonymous: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([PollStatusSchema, z.lazy(() => EnumPollStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdById: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  roomId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  votes: z.lazy(() => VoteUncheckedUpdateManyWithoutPollNestedInputObjectSchema).optional(),
  options: z.lazy(() => OptionUncheckedUpdateManyWithoutPollNestedInputObjectSchema).optional(),
  pollHashtags: z.lazy(() => PollHashtagUncheckedUpdateManyWithoutPollNestedInputObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateUncheckedUpdateManyWithoutPollNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedUpdateManyWithoutPollNestedInputObjectSchema).optional(),
  childDependencies: z.lazy(() => PollDependencyUncheckedUpdateManyWithoutChildPollNestedInputObjectSchema).optional()
}).strict();
export const PollUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.PollUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUncheckedUpdateInput>;
export const PollUncheckedUpdateInputObjectZodSchema = makeSchema();
