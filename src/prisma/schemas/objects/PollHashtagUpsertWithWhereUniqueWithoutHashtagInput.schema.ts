import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './PollHashtagWhereUniqueInput.schema';
import { PollHashtagUpdateWithoutHashtagInputObjectSchema as PollHashtagUpdateWithoutHashtagInputObjectSchema } from './PollHashtagUpdateWithoutHashtagInput.schema';
import { PollHashtagUncheckedUpdateWithoutHashtagInputObjectSchema as PollHashtagUncheckedUpdateWithoutHashtagInputObjectSchema } from './PollHashtagUncheckedUpdateWithoutHashtagInput.schema';
import { PollHashtagCreateWithoutHashtagInputObjectSchema as PollHashtagCreateWithoutHashtagInputObjectSchema } from './PollHashtagCreateWithoutHashtagInput.schema';
import { PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema as PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema } from './PollHashtagUncheckedCreateWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollHashtagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PollHashtagUpdateWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagUncheckedUpdateWithoutHashtagInputObjectSchema)]),
  create: z.union([z.lazy(() => PollHashtagCreateWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema)])
}).strict();
export const PollHashtagUpsertWithWhereUniqueWithoutHashtagInputObjectSchema: z.ZodType<Prisma.PollHashtagUpsertWithWhereUniqueWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpsertWithWhereUniqueWithoutHashtagInput>;
export const PollHashtagUpsertWithWhereUniqueWithoutHashtagInputObjectZodSchema = makeSchema();
