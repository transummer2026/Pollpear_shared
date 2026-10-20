import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanUpdateWithoutUserInputObjectSchema as BanUpdateWithoutUserInputObjectSchema } from './BanUpdateWithoutUserInput.schema';
import { BanUncheckedUpdateWithoutUserInputObjectSchema as BanUncheckedUpdateWithoutUserInputObjectSchema } from './BanUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BanUpdateWithoutUserInputObjectSchema), z.lazy(() => BanUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const BanUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.BanUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpdateWithWhereUniqueWithoutUserInput>;
export const BanUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
