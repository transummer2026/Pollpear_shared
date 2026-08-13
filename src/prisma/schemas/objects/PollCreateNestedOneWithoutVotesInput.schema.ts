import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutVotesInputObjectSchema as PollCreateWithoutVotesInputObjectSchema } from './PollCreateWithoutVotesInput.schema';
import { PollUncheckedCreateWithoutVotesInputObjectSchema as PollUncheckedCreateWithoutVotesInputObjectSchema } from './PollUncheckedCreateWithoutVotesInput.schema';
import { PollCreateOrConnectWithoutVotesInputObjectSchema as PollCreateOrConnectWithoutVotesInputObjectSchema } from './PollCreateOrConnectWithoutVotesInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutVotesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutVotesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutVotesInputObjectSchema).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional()
}).strict();
export const PollCreateNestedOneWithoutVotesInputObjectSchema: z.ZodType<Prisma.PollCreateNestedOneWithoutVotesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateNestedOneWithoutVotesInput>;
export const PollCreateNestedOneWithoutVotesInputObjectZodSchema = makeSchema();
