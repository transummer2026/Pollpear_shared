import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { VoteOptionUpdateManyWithoutOptionNestedInputObjectSchema as VoteOptionUpdateManyWithoutOptionNestedInputObjectSchema } from './VoteOptionUpdateManyWithoutOptionNestedInput.schema';
import { PollDependencyUpdateManyWithoutOptionNestedInputObjectSchema as PollDependencyUpdateManyWithoutOptionNestedInputObjectSchema } from './PollDependencyUpdateManyWithoutOptionNestedInput.schema';
import { ReportUpdateManyWithoutOptionNestedInputObjectSchema as ReportUpdateManyWithoutOptionNestedInputObjectSchema } from './ReportUpdateManyWithoutOptionNestedInput.schema'

const makeSchema = () => z.object({
  text: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sliderLeftLabel: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  sliderRightLabel: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  voteOptions: z.lazy(() => VoteOptionUpdateManyWithoutOptionNestedInputObjectSchema).optional(),
  pollDependencies: z.lazy(() => PollDependencyUpdateManyWithoutOptionNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutOptionNestedInputObjectSchema).optional()
}).strict();
export const OptionUpdateWithoutPollInputObjectSchema: z.ZodType<Prisma.OptionUpdateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateWithoutPollInput>;
export const OptionUpdateWithoutPollInputObjectZodSchema = makeSchema();
