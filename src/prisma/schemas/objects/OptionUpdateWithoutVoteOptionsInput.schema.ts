import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { PollUpdateOneRequiredWithoutOptionsNestedInputObjectSchema as PollUpdateOneRequiredWithoutOptionsNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutOptionsNestedInput.schema';
import { PollDependencyUpdateManyWithoutOptionNestedInputObjectSchema as PollDependencyUpdateManyWithoutOptionNestedInputObjectSchema } from './PollDependencyUpdateManyWithoutOptionNestedInput.schema';
import { ReportUpdateManyWithoutOptionNestedInputObjectSchema as ReportUpdateManyWithoutOptionNestedInputObjectSchema } from './ReportUpdateManyWithoutOptionNestedInput.schema'

const makeSchema = () => z.object({
  label: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sliderLeftLabel: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  sliderRightLabel: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  poll: z.lazy(() => PollUpdateOneRequiredWithoutOptionsNestedInputObjectSchema).optional(),
  pollDependencies: z.lazy(() => PollDependencyUpdateManyWithoutOptionNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutOptionNestedInputObjectSchema).optional()
}).strict();
export const OptionUpdateWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.OptionUpdateWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateWithoutVoteOptionsInput>;
export const OptionUpdateWithoutVoteOptionsInputObjectZodSchema = makeSchema();
