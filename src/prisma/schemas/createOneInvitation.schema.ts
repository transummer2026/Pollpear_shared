import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { InvitationUncheckedCreateInputObjectSchema as InvitationUncheckedCreateInputObjectSchema } from './objects/InvitationUncheckedCreateInput.schema';

export const InvitationCreateOneSchema: z.ZodType<Prisma.InvitationCreateArgs> = z.object({   data: InvitationUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InvitationCreateArgs>;

export const InvitationCreateOneZodSchema = z.object({   data: InvitationUncheckedCreateInputObjectSchema }).strict();