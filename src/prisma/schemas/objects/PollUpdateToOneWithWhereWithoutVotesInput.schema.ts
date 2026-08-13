import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema';
import { PollUpdateWithoutVotesInputObjectSchema as PollUpdateWithoutVotesInputObjectSchema } from './PollUpdateWithoutVotesInput.schema';
import { PollUncheckedUpdateWithoutVotesInputObjectSchema as PollUncheckedUpdateWithoutVotesInputObjectSchema } from './PollUncheckedUpdateWithoutVotesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PollUpdateWithoutVotesInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutVotesInputObjectSchema)])
}).strict();
export const PollUpdateToOneWithWhereWithoutVotesInputObjectSchema: z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutVotesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutVotesInput>;
export const PollUpdateToOneWithWhereWithoutVotesInputObjectZodSchema = makeSchema();
