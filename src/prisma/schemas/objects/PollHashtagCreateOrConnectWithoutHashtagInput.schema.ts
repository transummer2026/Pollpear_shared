import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './PollHashtagWhereUniqueInput.schema';
import { PollHashtagCreateWithoutHashtagInputObjectSchema as PollHashtagCreateWithoutHashtagInputObjectSchema } from './PollHashtagCreateWithoutHashtagInput.schema';
import { PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema as PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema } from './PollHashtagUncheckedCreateWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollHashtagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollHashtagCreateWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema)])
}).strict();
export const PollHashtagCreateOrConnectWithoutHashtagInputObjectSchema: z.ZodType<Prisma.PollHashtagCreateOrConnectWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCreateOrConnectWithoutHashtagInput>;
export const PollHashtagCreateOrConnectWithoutHashtagInputObjectZodSchema = makeSchema();
