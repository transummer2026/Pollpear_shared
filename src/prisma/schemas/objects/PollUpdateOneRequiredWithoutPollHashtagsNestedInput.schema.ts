import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutPollHashtagsInputObjectSchema as PollCreateWithoutPollHashtagsInputObjectSchema } from './PollCreateWithoutPollHashtagsInput.schema';
import { PollUncheckedCreateWithoutPollHashtagsInputObjectSchema as PollUncheckedCreateWithoutPollHashtagsInputObjectSchema } from './PollUncheckedCreateWithoutPollHashtagsInput.schema';
import { PollCreateOrConnectWithoutPollHashtagsInputObjectSchema as PollCreateOrConnectWithoutPollHashtagsInputObjectSchema } from './PollCreateOrConnectWithoutPollHashtagsInput.schema';
import { PollUpsertWithoutPollHashtagsInputObjectSchema as PollUpsertWithoutPollHashtagsInputObjectSchema } from './PollUpsertWithoutPollHashtagsInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateToOneWithWhereWithoutPollHashtagsInputObjectSchema as PollUpdateToOneWithWhereWithoutPollHashtagsInputObjectSchema } from './PollUpdateToOneWithWhereWithoutPollHashtagsInput.schema';
import { PollUpdateWithoutPollHashtagsInputObjectSchema as PollUpdateWithoutPollHashtagsInputObjectSchema } from './PollUpdateWithoutPollHashtagsInput.schema';
import { PollUncheckedUpdateWithoutPollHashtagsInputObjectSchema as PollUncheckedUpdateWithoutPollHashtagsInputObjectSchema } from './PollUncheckedUpdateWithoutPollHashtagsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutPollHashtagsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutPollHashtagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutPollHashtagsInputObjectSchema).optional(),
  upsert: z.lazy(() => PollUpsertWithoutPollHashtagsInputObjectSchema).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PollUpdateToOneWithWhereWithoutPollHashtagsInputObjectSchema), z.lazy(() => PollUpdateWithoutPollHashtagsInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutPollHashtagsInputObjectSchema)]).optional()
}).strict();
export const PollUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema: z.ZodType<Prisma.PollUpdateOneRequiredWithoutPollHashtagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateOneRequiredWithoutPollHashtagsNestedInput>;
export const PollUpdateOneRequiredWithoutPollHashtagsNestedInputObjectZodSchema = makeSchema();
