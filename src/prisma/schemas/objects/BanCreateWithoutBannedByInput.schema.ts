import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutBansReceivedInputObjectSchema as UserCreateNestedOneWithoutBansReceivedInputObjectSchema } from './UserCreateNestedOneWithoutBansReceivedInput.schema';
import { UserCreateNestedOneWithoutBansLiftedInputObjectSchema as UserCreateNestedOneWithoutBansLiftedInputObjectSchema } from './UserCreateNestedOneWithoutBansLiftedInput.schema';
import { BanAttachmentCreateNestedManyWithoutBanInputObjectSchema as BanAttachmentCreateNestedManyWithoutBanInputObjectSchema } from './BanAttachmentCreateNestedManyWithoutBanInput.schema'

const makeSchema = () => z.object({
  banReason: z.string(),
  bannedAt: z.coerce.date(),
  unbannedAt: z.coerce.date(),
  unbanReason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBansReceivedInputObjectSchema),
  unbannedBy: z.lazy(() => UserCreateNestedOneWithoutBansLiftedInputObjectSchema).optional(),
  attachments: z.lazy(() => BanAttachmentCreateNestedManyWithoutBanInputObjectSchema).optional()
}).strict();
export const BanCreateWithoutBannedByInputObjectSchema: z.ZodType<Prisma.BanCreateWithoutBannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateWithoutBannedByInput>;
export const BanCreateWithoutBannedByInputObjectZodSchema = makeSchema();
