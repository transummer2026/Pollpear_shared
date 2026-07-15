import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from './BanAttachmentWhereUniqueInput.schema';
import { BanAttachmentCreateWithoutBanInputObjectSchema as BanAttachmentCreateWithoutBanInputObjectSchema } from './BanAttachmentCreateWithoutBanInput.schema';
import { BanAttachmentUncheckedCreateWithoutBanInputObjectSchema as BanAttachmentUncheckedCreateWithoutBanInputObjectSchema } from './BanAttachmentUncheckedCreateWithoutBanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BanAttachmentCreateWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentUncheckedCreateWithoutBanInputObjectSchema)])
}).strict();
export const BanAttachmentCreateOrConnectWithoutBanInputObjectSchema: z.ZodType<Prisma.BanAttachmentCreateOrConnectWithoutBanInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentCreateOrConnectWithoutBanInput>;
export const BanAttachmentCreateOrConnectWithoutBanInputObjectZodSchema = makeSchema();
