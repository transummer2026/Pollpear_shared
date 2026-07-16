import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagScalarWhereInputObjectSchema as PollHashtagScalarWhereInputObjectSchema } from './PollHashtagScalarWhereInput.schema';
import { PollHashtagUpdateManyMutationInputObjectSchema as PollHashtagUpdateManyMutationInputObjectSchema } from './PollHashtagUpdateManyMutationInput.schema';
import { PollHashtagUncheckedUpdateManyWithoutHashtagInputObjectSchema as PollHashtagUncheckedUpdateManyWithoutHashtagInputObjectSchema } from './PollHashtagUncheckedUpdateManyWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollHashtagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PollHashtagUpdateManyMutationInputObjectSchema), z.lazy(() => PollHashtagUncheckedUpdateManyWithoutHashtagInputObjectSchema)])
}).strict();
export const PollHashtagUpdateManyWithWhereWithoutHashtagInputObjectSchema: z.ZodType<Prisma.PollHashtagUpdateManyWithWhereWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpdateManyWithWhereWithoutHashtagInput>;
export const PollHashtagUpdateManyWithWhereWithoutHashtagInputObjectZodSchema = makeSchema();
