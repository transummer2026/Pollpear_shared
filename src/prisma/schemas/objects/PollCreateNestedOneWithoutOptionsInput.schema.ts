import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutOptionsInputObjectSchema as PollCreateWithoutOptionsInputObjectSchema } from './PollCreateWithoutOptionsInput.schema';
import { PollUncheckedCreateWithoutOptionsInputObjectSchema as PollUncheckedCreateWithoutOptionsInputObjectSchema } from './PollUncheckedCreateWithoutOptionsInput.schema';
import { PollCreateOrConnectWithoutOptionsInputObjectSchema as PollCreateOrConnectWithoutOptionsInputObjectSchema } from './PollCreateOrConnectWithoutOptionsInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutOptionsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutOptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutOptionsInputObjectSchema).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional()
}).strict();
export const PollCreateNestedOneWithoutOptionsInputObjectSchema: z.ZodType<Prisma.PollCreateNestedOneWithoutOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateNestedOneWithoutOptionsInput>;
export const PollCreateNestedOneWithoutOptionsInputObjectZodSchema = makeSchema();
