import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { PollDependencyUncheckedUpdateManyWithoutOptionNestedInputObjectSchema as PollDependencyUncheckedUpdateManyWithoutOptionNestedInputObjectSchema } from './PollDependencyUncheckedUpdateManyWithoutOptionNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutOptionNestedInputObjectSchema as ReportUncheckedUpdateManyWithoutOptionNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutOptionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sliderLeftLabel: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  sliderRightLabel: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  pollId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  pollDependencies: z.lazy(() => PollDependencyUncheckedUpdateManyWithoutOptionNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedUpdateManyWithoutOptionNestedInputObjectSchema).optional()
}).strict();
export const OptionUncheckedUpdateWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.OptionUncheckedUpdateWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUncheckedUpdateWithoutVoteOptionsInput>;
export const OptionUncheckedUpdateWithoutVoteOptionsInputObjectZodSchema = makeSchema();
