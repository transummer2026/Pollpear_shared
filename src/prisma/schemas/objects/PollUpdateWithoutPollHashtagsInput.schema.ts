import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
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
import { UserUpdateOneRequiredWithoutPollsCreatedNestedInputObjectSchema as UserUpdateOneRequiredWithoutPollsCreatedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPollsCreatedNestedInput.schema';
import { RoomUpdateOneWithoutPollsNestedInputObjectSchema as RoomUpdateOneWithoutPollsNestedInputObjectSchema } from './RoomUpdateOneWithoutPollsNestedInput.schema';
import { OptionUpdateManyWithoutPollNestedInputObjectSchema as OptionUpdateManyWithoutPollNestedInputObjectSchema } from './OptionUpdateManyWithoutPollNestedInput.schema';
import { PollTemplateUpdateManyWithoutPollNestedInputObjectSchema as PollTemplateUpdateManyWithoutPollNestedInputObjectSchema } from './PollTemplateUpdateManyWithoutPollNestedInput.schema';
import { ReportUpdateManyWithoutPollNestedInputObjectSchema as ReportUpdateManyWithoutPollNestedInputObjectSchema } from './ReportUpdateManyWithoutPollNestedInput.schema';
import { PollDependencyUpdateManyWithoutChildPollNestedInputObjectSchema as PollDependencyUpdateManyWithoutChildPollNestedInputObjectSchema } from './PollDependencyUpdateManyWithoutChildPollNestedInput.schema'

const makeSchema = () => z.object({
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
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutPollsCreatedNestedInputObjectSchema).optional(),
  room: z.lazy(() => RoomUpdateOneWithoutPollsNestedInputObjectSchema).optional(),
  options: z.lazy(() => OptionUpdateManyWithoutPollNestedInputObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateUpdateManyWithoutPollNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutPollNestedInputObjectSchema).optional(),
  childDependencies: z.lazy(() => PollDependencyUpdateManyWithoutChildPollNestedInputObjectSchema).optional()
}).strict();
export const PollUpdateWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.PollUpdateWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateWithoutPollHashtagsInput>;
export const PollUpdateWithoutPollHashtagsInputObjectZodSchema = makeSchema();
