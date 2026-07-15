import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './PollHashtagWhereUniqueInput.schema';
import { PollHashtagUpdateWithoutHashtagInputObjectSchema as PollHashtagUpdateWithoutHashtagInputObjectSchema } from './PollHashtagUpdateWithoutHashtagInput.schema';
import { PollHashtagUncheckedUpdateWithoutHashtagInputObjectSchema as PollHashtagUncheckedUpdateWithoutHashtagInputObjectSchema } from './PollHashtagUncheckedUpdateWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollHashtagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PollHashtagUpdateWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagUncheckedUpdateWithoutHashtagInputObjectSchema)])
}).strict();
export const PollHashtagUpdateWithWhereUniqueWithoutHashtagInputObjectSchema: z.ZodType<Prisma.PollHashtagUpdateWithWhereUniqueWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpdateWithWhereUniqueWithoutHashtagInput>;
export const PollHashtagUpdateWithWhereUniqueWithoutHashtagInputObjectZodSchema = makeSchema();
