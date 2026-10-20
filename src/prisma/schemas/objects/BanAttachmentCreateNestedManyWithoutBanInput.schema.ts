import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentCreateWithoutBanInputObjectSchema as BanAttachmentCreateWithoutBanInputObjectSchema } from './BanAttachmentCreateWithoutBanInput.schema';
import { BanAttachmentUncheckedCreateWithoutBanInputObjectSchema as BanAttachmentUncheckedCreateWithoutBanInputObjectSchema } from './BanAttachmentUncheckedCreateWithoutBanInput.schema';
import { BanAttachmentCreateOrConnectWithoutBanInputObjectSchema as BanAttachmentCreateOrConnectWithoutBanInputObjectSchema } from './BanAttachmentCreateOrConnectWithoutBanInput.schema';
import { BanAttachmentCreateManyBanInputEnvelopeObjectSchema as BanAttachmentCreateManyBanInputEnvelopeObjectSchema } from './BanAttachmentCreateManyBanInputEnvelope.schema';
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from './BanAttachmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanAttachmentCreateWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentCreateWithoutBanInputObjectSchema).array(), z.lazy(() => BanAttachmentUncheckedCreateWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentUncheckedCreateWithoutBanInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanAttachmentCreateOrConnectWithoutBanInputObjectSchema), z.lazy(() => BanAttachmentCreateOrConnectWithoutBanInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanAttachmentCreateManyBanInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema), z.lazy(() => BanAttachmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BanAttachmentCreateNestedManyWithoutBanInputObjectSchema: z.ZodType<Prisma.BanAttachmentCreateNestedManyWithoutBanInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentCreateNestedManyWithoutBanInput>;
export const BanAttachmentCreateNestedManyWithoutBanInputObjectZodSchema = makeSchema();
