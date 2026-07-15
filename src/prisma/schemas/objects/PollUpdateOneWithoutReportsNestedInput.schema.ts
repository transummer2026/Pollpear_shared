import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutReportsInputObjectSchema as PollCreateWithoutReportsInputObjectSchema } from './PollCreateWithoutReportsInput.schema';
import { PollUncheckedCreateWithoutReportsInputObjectSchema as PollUncheckedCreateWithoutReportsInputObjectSchema } from './PollUncheckedCreateWithoutReportsInput.schema';
import { PollCreateOrConnectWithoutReportsInputObjectSchema as PollCreateOrConnectWithoutReportsInputObjectSchema } from './PollCreateOrConnectWithoutReportsInput.schema';
import { PollUpsertWithoutReportsInputObjectSchema as PollUpsertWithoutReportsInputObjectSchema } from './PollUpsertWithoutReportsInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateToOneWithWhereWithoutReportsInputObjectSchema as PollUpdateToOneWithWhereWithoutReportsInputObjectSchema } from './PollUpdateToOneWithWhereWithoutReportsInput.schema';
import { PollUpdateWithoutReportsInputObjectSchema as PollUpdateWithoutReportsInputObjectSchema } from './PollUpdateWithoutReportsInput.schema';
import { PollUncheckedUpdateWithoutReportsInputObjectSchema as PollUncheckedUpdateWithoutReportsInputObjectSchema } from './PollUncheckedUpdateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutReportsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  upsert: z.lazy(() => PollUpsertWithoutReportsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => PollWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => PollWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PollUpdateToOneWithWhereWithoutReportsInputObjectSchema), z.lazy(() => PollUpdateWithoutReportsInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutReportsInputObjectSchema)]).optional()
}).strict();
export const PollUpdateOneWithoutReportsNestedInputObjectSchema: z.ZodType<Prisma.PollUpdateOneWithoutReportsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateOneWithoutReportsNestedInput>;
export const PollUpdateOneWithoutReportsNestedInputObjectZodSchema = makeSchema();
