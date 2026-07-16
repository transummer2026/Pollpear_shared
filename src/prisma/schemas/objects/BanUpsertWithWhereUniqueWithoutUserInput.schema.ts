import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanUpdateWithoutUserInputObjectSchema as BanUpdateWithoutUserInputObjectSchema } from './BanUpdateWithoutUserInput.schema';
import { BanUncheckedUpdateWithoutUserInputObjectSchema as BanUncheckedUpdateWithoutUserInputObjectSchema } from './BanUncheckedUpdateWithoutUserInput.schema';
import { BanCreateWithoutUserInputObjectSchema as BanCreateWithoutUserInputObjectSchema } from './BanCreateWithoutUserInput.schema';
import { BanUncheckedCreateWithoutUserInputObjectSchema as BanUncheckedCreateWithoutUserInputObjectSchema } from './BanUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BanUpdateWithoutUserInputObjectSchema), z.lazy(() => BanUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => BanCreateWithoutUserInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const BanUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.BanUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpsertWithWhereUniqueWithoutUserInput>;
export const BanUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
