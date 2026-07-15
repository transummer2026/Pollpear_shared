import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutPollTemplatesInputObjectSchema as PollCreateWithoutPollTemplatesInputObjectSchema } from './PollCreateWithoutPollTemplatesInput.schema';
import { PollUncheckedCreateWithoutPollTemplatesInputObjectSchema as PollUncheckedCreateWithoutPollTemplatesInputObjectSchema } from './PollUncheckedCreateWithoutPollTemplatesInput.schema';
import { PollCreateOrConnectWithoutPollTemplatesInputObjectSchema as PollCreateOrConnectWithoutPollTemplatesInputObjectSchema } from './PollCreateOrConnectWithoutPollTemplatesInput.schema';
import { PollUpsertWithoutPollTemplatesInputObjectSchema as PollUpsertWithoutPollTemplatesInputObjectSchema } from './PollUpsertWithoutPollTemplatesInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateToOneWithWhereWithoutPollTemplatesInputObjectSchema as PollUpdateToOneWithWhereWithoutPollTemplatesInputObjectSchema } from './PollUpdateToOneWithWhereWithoutPollTemplatesInput.schema';
import { PollUpdateWithoutPollTemplatesInputObjectSchema as PollUpdateWithoutPollTemplatesInputObjectSchema } from './PollUpdateWithoutPollTemplatesInput.schema';
import { PollUncheckedUpdateWithoutPollTemplatesInputObjectSchema as PollUncheckedUpdateWithoutPollTemplatesInputObjectSchema } from './PollUncheckedUpdateWithoutPollTemplatesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutPollTemplatesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutPollTemplatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutPollTemplatesInputObjectSchema).optional(),
  upsert: z.lazy(() => PollUpsertWithoutPollTemplatesInputObjectSchema).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PollUpdateToOneWithWhereWithoutPollTemplatesInputObjectSchema), z.lazy(() => PollUpdateWithoutPollTemplatesInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutPollTemplatesInputObjectSchema)]).optional()
}).strict();
export const PollUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema: z.ZodType<Prisma.PollUpdateOneRequiredWithoutPollTemplatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateOneRequiredWithoutPollTemplatesNestedInput>;
export const PollUpdateOneRequiredWithoutPollTemplatesNestedInputObjectZodSchema = makeSchema();
