import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionScalarWhereInputObjectSchema as OptionScalarWhereInputObjectSchema } from './OptionScalarWhereInput.schema';
import { OptionUpdateManyMutationInputObjectSchema as OptionUpdateManyMutationInputObjectSchema } from './OptionUpdateManyMutationInput.schema';
import { OptionUncheckedUpdateManyWithoutPollInputObjectSchema as OptionUncheckedUpdateManyWithoutPollInputObjectSchema } from './OptionUncheckedUpdateManyWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OptionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OptionUpdateManyMutationInputObjectSchema), z.lazy(() => OptionUncheckedUpdateManyWithoutPollInputObjectSchema)])
}).strict();
export const OptionUpdateManyWithWhereWithoutPollInputObjectSchema: z.ZodType<Prisma.OptionUpdateManyWithWhereWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateManyWithWhereWithoutPollInput>;
export const OptionUpdateManyWithWhereWithoutPollInputObjectZodSchema = makeSchema();
