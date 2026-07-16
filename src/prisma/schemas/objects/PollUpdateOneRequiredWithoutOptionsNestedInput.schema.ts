import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutOptionsInputObjectSchema as PollCreateWithoutOptionsInputObjectSchema } from './PollCreateWithoutOptionsInput.schema';
import { PollUncheckedCreateWithoutOptionsInputObjectSchema as PollUncheckedCreateWithoutOptionsInputObjectSchema } from './PollUncheckedCreateWithoutOptionsInput.schema';
import { PollCreateOrConnectWithoutOptionsInputObjectSchema as PollCreateOrConnectWithoutOptionsInputObjectSchema } from './PollCreateOrConnectWithoutOptionsInput.schema';
import { PollUpsertWithoutOptionsInputObjectSchema as PollUpsertWithoutOptionsInputObjectSchema } from './PollUpsertWithoutOptionsInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateToOneWithWhereWithoutOptionsInputObjectSchema as PollUpdateToOneWithWhereWithoutOptionsInputObjectSchema } from './PollUpdateToOneWithWhereWithoutOptionsInput.schema';
import { PollUpdateWithoutOptionsInputObjectSchema as PollUpdateWithoutOptionsInputObjectSchema } from './PollUpdateWithoutOptionsInput.schema';
import { PollUncheckedUpdateWithoutOptionsInputObjectSchema as PollUncheckedUpdateWithoutOptionsInputObjectSchema } from './PollUncheckedUpdateWithoutOptionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutOptionsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutOptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutOptionsInputObjectSchema).optional(),
  upsert: z.lazy(() => PollUpsertWithoutOptionsInputObjectSchema).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PollUpdateToOneWithWhereWithoutOptionsInputObjectSchema), z.lazy(() => PollUpdateWithoutOptionsInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutOptionsInputObjectSchema)]).optional()
}).strict();
export const PollUpdateOneRequiredWithoutOptionsNestedInputObjectSchema: z.ZodType<Prisma.PollUpdateOneRequiredWithoutOptionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateOneRequiredWithoutOptionsNestedInput>;
export const PollUpdateOneRequiredWithoutOptionsNestedInputObjectZodSchema = makeSchema();
