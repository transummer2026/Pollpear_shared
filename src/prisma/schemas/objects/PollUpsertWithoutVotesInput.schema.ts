import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollUpdateWithoutVotesInputObjectSchema as PollUpdateWithoutVotesInputObjectSchema } from './PollUpdateWithoutVotesInput.schema';
import { PollUncheckedUpdateWithoutVotesInputObjectSchema as PollUncheckedUpdateWithoutVotesInputObjectSchema } from './PollUncheckedUpdateWithoutVotesInput.schema';
import { PollCreateWithoutVotesInputObjectSchema as PollCreateWithoutVotesInputObjectSchema } from './PollCreateWithoutVotesInput.schema';
import { PollUncheckedCreateWithoutVotesInputObjectSchema as PollUncheckedCreateWithoutVotesInputObjectSchema } from './PollUncheckedCreateWithoutVotesInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PollUpdateWithoutVotesInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutVotesInputObjectSchema)]),
  create: z.union([z.lazy(() => PollCreateWithoutVotesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutVotesInputObjectSchema)]),
  where: z.lazy(() => PollWhereInputObjectSchema).optional()
}).strict();
export const PollUpsertWithoutVotesInputObjectSchema: z.ZodType<Prisma.PollUpsertWithoutVotesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpsertWithoutVotesInput>;
export const PollUpsertWithoutVotesInputObjectZodSchema = makeSchema();
