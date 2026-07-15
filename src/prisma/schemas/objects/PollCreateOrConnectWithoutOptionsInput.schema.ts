import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollCreateWithoutOptionsInputObjectSchema as PollCreateWithoutOptionsInputObjectSchema } from './PollCreateWithoutOptionsInput.schema';
import { PollUncheckedCreateWithoutOptionsInputObjectSchema as PollUncheckedCreateWithoutOptionsInputObjectSchema } from './PollUncheckedCreateWithoutOptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollCreateWithoutOptionsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutOptionsInputObjectSchema)])
}).strict();
export const PollCreateOrConnectWithoutOptionsInputObjectSchema: z.ZodType<Prisma.PollCreateOrConnectWithoutOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateOrConnectWithoutOptionsInput>;
export const PollCreateOrConnectWithoutOptionsInputObjectZodSchema = makeSchema();
