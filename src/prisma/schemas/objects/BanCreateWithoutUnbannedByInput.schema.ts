import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutBansReceivedInputObjectSchema as UserCreateNestedOneWithoutBansReceivedInputObjectSchema } from './UserCreateNestedOneWithoutBansReceivedInput.schema';
import { UserCreateNestedOneWithoutBansDoneInputObjectSchema as UserCreateNestedOneWithoutBansDoneInputObjectSchema } from './UserCreateNestedOneWithoutBansDoneInput.schema';
import { BanAttachmentCreateNestedManyWithoutBanInputObjectSchema as BanAttachmentCreateNestedManyWithoutBanInputObjectSchema } from './BanAttachmentCreateNestedManyWithoutBanInput.schema'

const makeSchema = () => z.object({
  banReason: z.string(),
  bannedAt: z.coerce.date(),
  unbannedAt: z.coerce.date(),
  unbanReason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBansReceivedInputObjectSchema),
  bannedBy: z.lazy(() => UserCreateNestedOneWithoutBansDoneInputObjectSchema),
  attachments: z.lazy(() => BanAttachmentCreateNestedManyWithoutBanInputObjectSchema).optional()
}).strict();
export const BanCreateWithoutUnbannedByInputObjectSchema: z.ZodType<Prisma.BanCreateWithoutUnbannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateWithoutUnbannedByInput>;
export const BanCreateWithoutUnbannedByInputObjectZodSchema = makeSchema();
