import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagScalarWhereInputObjectSchema as PollHashtagScalarWhereInputObjectSchema } from './PollHashtagScalarWhereInput.schema';
import { PollHashtagUpdateManyMutationInputObjectSchema as PollHashtagUpdateManyMutationInputObjectSchema } from './PollHashtagUpdateManyMutationInput.schema';
import { PollHashtagUncheckedUpdateManyWithoutPollInputObjectSchema as PollHashtagUncheckedUpdateManyWithoutPollInputObjectSchema } from './PollHashtagUncheckedUpdateManyWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollHashtagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PollHashtagUpdateManyMutationInputObjectSchema), z.lazy(() => PollHashtagUncheckedUpdateManyWithoutPollInputObjectSchema)])
}).strict();
export const PollHashtagUpdateManyWithWhereWithoutPollInputObjectSchema: z.ZodType<Prisma.PollHashtagUpdateManyWithWhereWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpdateManyWithWhereWithoutPollInput>;
export const PollHashtagUpdateManyWithWhereWithoutPollInputObjectZodSchema = makeSchema();
