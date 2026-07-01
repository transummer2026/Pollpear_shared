import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './objects/InvitationWhereUniqueInput.schema';

export const InvitationFindUniqueSchema: z.ZodType<Prisma.InvitationFindUniqueArgs> = z.object({   where: InvitationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InvitationFindUniqueArgs>;

export const InvitationFindUniqueZodSchema = z.object({   where: InvitationWhereUniqueInputObjectSchema }).strict();