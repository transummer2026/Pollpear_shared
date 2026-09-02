import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanAttachmentScalarWhereInputObjectSchema as BanAttachmentScalarWhereInputObjectSchema } from './BanAttachmentScalarWhereInput.schema';
import { BanAttachmentUpdateManyMutationInputObjectSchema as BanAttachmentUpdateManyMutationInputObjectSchema } from './BanAttachmentUpdateManyMutationInput.schema';
import { BanAttachmentUncheckedUpdateManyWithoutBanInputObjectSchema as BanAttachmentUncheckedUpdateManyWithoutBanInputObjectSchema } from './BanAttachmentUncheckedUpdateManyWithoutBanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanAttachmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BanAttachmentUpdateManyMutationInputObjectSchema), z.lazy(() => BanAttachmentUncheckedUpdateManyWithoutBanInputObjectSchema)])
}).strict();
export const BanAttachmentUpdateManyWithWhereWithoutBanInputObjectSchema: z.ZodType<Prisma.BanAttachmentUpdateManyWithWhereWithoutBanInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentUpdateManyWithWhereWithoutBanInput>;
export const BanAttachmentUpdateManyWithWhereWithoutBanInputObjectZodSchema = makeSchema();
