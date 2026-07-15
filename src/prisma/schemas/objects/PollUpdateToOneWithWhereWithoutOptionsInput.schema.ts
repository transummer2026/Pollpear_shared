import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema';
import { PollUpdateWithoutOptionsInputObjectSchema as PollUpdateWithoutOptionsInputObjectSchema } from './PollUpdateWithoutOptionsInput.schema';
import { PollUncheckedUpdateWithoutOptionsInputObjectSchema as PollUncheckedUpdateWithoutOptionsInputObjectSchema } from './PollUncheckedUpdateWithoutOptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PollUpdateWithoutOptionsInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutOptionsInputObjectSchema)])
}).strict();
export const PollUpdateToOneWithWhereWithoutOptionsInputObjectSchema: z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutOptionsInput>;
export const PollUpdateToOneWithWhereWithoutOptionsInputObjectZodSchema = makeSchema();
