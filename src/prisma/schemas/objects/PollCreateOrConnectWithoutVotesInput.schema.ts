import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollCreateWithoutVotesInputObjectSchema as PollCreateWithoutVotesInputObjectSchema } from './PollCreateWithoutVotesInput.schema';
import { PollUncheckedCreateWithoutVotesInputObjectSchema as PollUncheckedCreateWithoutVotesInputObjectSchema } from './PollUncheckedCreateWithoutVotesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollCreateWithoutVotesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutVotesInputObjectSchema)])
}).strict();
export const PollCreateOrConnectWithoutVotesInputObjectSchema: z.ZodType<Prisma.PollCreateOrConnectWithoutVotesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateOrConnectWithoutVotesInput>;
export const PollCreateOrConnectWithoutVotesInputObjectZodSchema = makeSchema();
