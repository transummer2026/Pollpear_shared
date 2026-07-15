import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './BanWhereUniqueInput.schema';
import { BanCreateWithoutUserInputObjectSchema as BanCreateWithoutUserInputObjectSchema } from './BanCreateWithoutUserInput.schema';
import { BanUncheckedCreateWithoutUserInputObjectSchema as BanUncheckedCreateWithoutUserInputObjectSchema } from './BanUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BanCreateWithoutUserInputObjectSchema), z.lazy(() => BanUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const BanCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.BanCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateOrConnectWithoutUserInput>;
export const BanCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
