import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from './BanAttachmentWhereUniqueInput.schema';
import { BanAttachmentUpdateWithoutBanInputObjectSchema as BanAttachmentUpdateWithoutBanInputObjectSchema } from './BanAttachmentUpdateWithoutBanInput.schema';
import { BanAttachmentUncheckedUpdateWithoutBanInputObjectSchema as BanAttachmentUncheckedUpdateWithoutBanInputObjectSchema } from './BanAttachmentUncheckedUpdateWithoutBanInput.schema';
import { BanAttachmentCreateWithoutBanInputObjectSchema as BanAttachmentCreateWithoutBanInputObjectSchema } from './BanAttachmentCreateWithoutBanInput.schema';
import { BanAttachmentUncheckedCreateWithoutBanInputObjectSchema as BanAttachmentUncheckedCreateWithoutBanInputObjectSchema } from './BanAttachmentUncheckedCreateWithoutBanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BanAttachmentUpdateWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentUncheckedUpdateWithoutBanInputObjectSchema)]),
  create: z.union([z.lazy(() => BanAttachmentCreateWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentUncheckedCreateWithoutBanInputObjectSchema)])
}).strict();
export const BanAttachmentUpsertWithWhereUniqueWithoutBanInputObjectSchema: z.ZodType<Prisma.BanAttachmentUpsertWithWhereUniqueWithoutBanInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentUpsertWithWhereUniqueWithoutBanInput>;
export const BanAttachmentUpsertWithWhereUniqueWithoutBanInputObjectZodSchema = makeSchema();
