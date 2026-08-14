import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { PollUpdateOneRequiredWithoutOptionsNestedInputObjectSchema as PollUpdateOneRequiredWithoutOptionsNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutOptionsNestedInput.schema';
import { VoteOptionUpdateManyWithoutOptionNestedInputObjectSchema as VoteOptionUpdateManyWithoutOptionNestedInputObjectSchema } from './VoteOptionUpdateManyWithoutOptionNestedInput.schema';
import { ReportUpdateManyWithoutOptionNestedInputObjectSchema as ReportUpdateManyWithoutOptionNestedInputObjectSchema } from './ReportUpdateManyWithoutOptionNestedInput.schema'

const makeSchema = () => z.object({
  text: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sliderLeftLabel: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  sliderRightLabel: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  poll: z.lazy(() => PollUpdateOneRequiredWithoutOptionsNestedInputObjectSchema).optional(),
  voteOptions: z.lazy(() => VoteOptionUpdateManyWithoutOptionNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutOptionNestedInputObjectSchema).optional()
}).strict();
export const OptionUpdateWithoutPollDependenciesInputObjectSchema: z.ZodType<Prisma.OptionUpdateWithoutPollDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateWithoutPollDependenciesInput>;
export const OptionUpdateWithoutPollDependenciesInputObjectZodSchema = makeSchema();
