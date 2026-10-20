import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from './BanAttachmentWhereUniqueInput.schema';
import { BanAttachmentUpdateWithoutBanInputObjectSchema as BanAttachmentUpdateWithoutBanInputObjectSchema } from './BanAttachmentUpdateWithoutBanInput.schema';
import { BanAttachmentUncheckedUpdateWithoutBanInputObjectSchema as BanAttachmentUncheckedUpdateWithoutBanInputObjectSchema } from './BanAttachmentUncheckedUpdateWithoutBanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BanAttachmentUpdateWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentUncheckedUpdateWithoutBanInputObjectSchema)])
}).strict();
export const BanAttachmentUpdateWithWhereUniqueWithoutBanInputObjectSchema: z.ZodType<Prisma.BanAttachmentUpdateWithWhereUniqueWithoutBanInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentUpdateWithWhereUniqueWithoutBanInput>;
export const BanAttachmentUpdateWithWhereUniqueWithoutBanInputObjectZodSchema = makeSchema();
