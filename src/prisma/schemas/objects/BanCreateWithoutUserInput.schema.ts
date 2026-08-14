import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutBansGivenInputObjectSchema as UserCreateNestedOneWithoutBansGivenInputObjectSchema } from './UserCreateNestedOneWithoutBansGivenInput.schema';
import { UserCreateNestedOneWithoutBansLiftedInputObjectSchema as UserCreateNestedOneWithoutBansLiftedInputObjectSchema } from './UserCreateNestedOneWithoutBansLiftedInput.schema';
import { BanAttachmentCreateNestedManyWithoutBanInputObjectSchema as BanAttachmentCreateNestedManyWithoutBanInputObjectSchema } from './BanAttachmentCreateNestedManyWithoutBanInput.schema'

const makeSchema = () => z.object({
  banReason: z.string(),
  unbanReason: z.string().optional().nullable(),
  startedAt: z.coerce.date(),
  endedAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bannedBy: z.lazy(() => UserCreateNestedOneWithoutBansGivenInputObjectSchema),
  unbannedBy: z.lazy(() => UserCreateNestedOneWithoutBansLiftedInputObjectSchema).optional(),
  attachments: z.lazy(() => BanAttachmentCreateNestedManyWithoutBanInputObjectSchema).optional()
}).strict();
export const BanCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.BanCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCreateWithoutUserInput>;
export const BanCreateWithoutUserInputObjectZodSchema = makeSchema();
