import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { PollUpdateOneRequiredWithoutOptionsNestedInputObjectSchema as PollUpdateOneRequiredWithoutOptionsNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutOptionsNestedInput.schema';
import { VoteOptionUpdateManyWithoutOptionNestedInputObjectSchema as VoteOptionUpdateManyWithoutOptionNestedInputObjectSchema } from './VoteOptionUpdateManyWithoutOptionNestedInput.schema';
import { PollDependencyUpdateManyWithoutOptionNestedInputObjectSchema as PollDependencyUpdateManyWithoutOptionNestedInputObjectSchema } from './PollDependencyUpdateManyWithoutOptionNestedInput.schema'

const makeSchema = () => z.object({
  label: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sliderLeftLabel: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  sliderRightLabel: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  poll: z.lazy(() => PollUpdateOneRequiredWithoutOptionsNestedInputObjectSchema).optional(),
  voteOptions: z.lazy(() => VoteOptionUpdateManyWithoutOptionNestedInputObjectSchema).optional(),
  pollDependencies: z.lazy(() => PollDependencyUpdateManyWithoutOptionNestedInputObjectSchema).optional()
}).strict();
export const OptionUpdateWithoutReportsInputObjectSchema: z.ZodType<Prisma.OptionUpdateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateWithoutReportsInput>;
export const OptionUpdateWithoutReportsInputObjectZodSchema = makeSchema();
