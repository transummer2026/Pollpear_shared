import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutBansReceivedInputObjectSchema as UserCreateNestedOneWithoutBansReceivedInputObjectSchema } from './UserCreateNestedOneWithoutBansReceivedInput.schema';
import { UserCreateNestedOneWithoutBansDoneInputObjectSchema as UserCreateNestedOneWithoutBansDoneInputObjectSchema } from './UserCreateNestedOneWithoutBansDoneInput.schema';
import { UserCreateNestedOneWithoutBansLiftedInputObjectSchema as UserCreateNestedOneWithoutBansLiftedInputObjectSchema } from './UserCreateNestedOneWithoutBansLiftedInput.schema'

const makeSchema = () => z.object({
  banReason: z.string(),
  bannedAt: z.coerce.date(),
  unbannedAt: z.coerce.date(),
  unbanReason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBansReceivedInputObjectSchema),
  bannedBy: z.lazy(() => UserCreateNestedOneWithoutBansDoneInputObjectSchema),
  unbannedBy: z.lazy(() => UserCreateNestedOneWithoutBansLiftedInputObjectSchema).optional()
}).strict();
export const BanCreateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.BanCreateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateWithoutAttachmentsInput>;
export const BanCreateWithoutAttachmentsInputObjectZodSchema = makeSchema();
