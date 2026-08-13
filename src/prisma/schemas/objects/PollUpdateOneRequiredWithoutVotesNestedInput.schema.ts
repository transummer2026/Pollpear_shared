import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutVotesInputObjectSchema as PollCreateWithoutVotesInputObjectSchema } from './PollCreateWithoutVotesInput.schema';
import { PollUncheckedCreateWithoutVotesInputObjectSchema as PollUncheckedCreateWithoutVotesInputObjectSchema } from './PollUncheckedCreateWithoutVotesInput.schema';
import { PollCreateOrConnectWithoutVotesInputObjectSchema as PollCreateOrConnectWithoutVotesInputObjectSchema } from './PollCreateOrConnectWithoutVotesInput.schema';
import { PollUpsertWithoutVotesInputObjectSchema as PollUpsertWithoutVotesInputObjectSchema } from './PollUpsertWithoutVotesInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateToOneWithWhereWithoutVotesInputObjectSchema as PollUpdateToOneWithWhereWithoutVotesInputObjectSchema } from './PollUpdateToOneWithWhereWithoutVotesInput.schema';
import { PollUpdateWithoutVotesInputObjectSchema as PollUpdateWithoutVotesInputObjectSchema } from './PollUpdateWithoutVotesInput.schema';
import { PollUncheckedUpdateWithoutVotesInputObjectSchema as PollUncheckedUpdateWithoutVotesInputObjectSchema } from './PollUncheckedUpdateWithoutVotesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutVotesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutVotesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutVotesInputObjectSchema).optional(),
  upsert: z.lazy(() => PollUpsertWithoutVotesInputObjectSchema).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PollUpdateToOneWithWhereWithoutVotesInputObjectSchema), z.lazy(() => PollUpdateWithoutVotesInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutVotesInputObjectSchema)]).optional()
}).strict();
export const PollUpdateOneRequiredWithoutVotesNestedInputObjectSchema: z.ZodType<Prisma.PollUpdateOneRequiredWithoutVotesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateOneRequiredWithoutVotesNestedInput>;
export const PollUpdateOneRequiredWithoutVotesNestedInputObjectZodSchema = makeSchema();
