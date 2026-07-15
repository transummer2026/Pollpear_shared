import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionCreateWithoutPollInputObjectSchema as OptionCreateWithoutPollInputObjectSchema } from './OptionCreateWithoutPollInput.schema';
import { OptionUncheckedCreateWithoutPollInputObjectSchema as OptionUncheckedCreateWithoutPollInputObjectSchema } from './OptionUncheckedCreateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OptionCreateWithoutPollInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutPollInputObjectSchema)])
}).strict();
export const OptionCreateOrConnectWithoutPollInputObjectSchema: z.ZodType<Prisma.OptionCreateOrConnectWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateOrConnectWithoutPollInput>;
export const OptionCreateOrConnectWithoutPollInputObjectZodSchema = makeSchema();
