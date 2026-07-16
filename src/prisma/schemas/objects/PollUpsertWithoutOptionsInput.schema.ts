import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollUpdateWithoutOptionsInputObjectSchema as PollUpdateWithoutOptionsInputObjectSchema } from './PollUpdateWithoutOptionsInput.schema';
import { PollUncheckedUpdateWithoutOptionsInputObjectSchema as PollUncheckedUpdateWithoutOptionsInputObjectSchema } from './PollUncheckedUpdateWithoutOptionsInput.schema';
import { PollCreateWithoutOptionsInputObjectSchema as PollCreateWithoutOptionsInputObjectSchema } from './PollCreateWithoutOptionsInput.schema';
import { PollUncheckedCreateWithoutOptionsInputObjectSchema as PollUncheckedCreateWithoutOptionsInputObjectSchema } from './PollUncheckedCreateWithoutOptionsInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PollUpdateWithoutOptionsInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutOptionsInputObjectSchema)]),
  create: z.union([z.lazy(() => PollCreateWithoutOptionsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutOptionsInputObjectSchema)]),
  where: z.lazy(() => PollWhereInputObjectSchema).optional()
}).strict();
export const PollUpsertWithoutOptionsInputObjectSchema: z.ZodType<Prisma.PollUpsertWithoutOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpsertWithoutOptionsInput>;
export const PollUpsertWithoutOptionsInputObjectZodSchema = makeSchema();
