import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  blockerId: z.number().int(),
  blockedId: z.number().int()
}).strict();
export const BlockBlockerIdBlockedIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.BlockBlockerIdBlockedIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockBlockerIdBlockedIdCompoundUniqueInput>;
export const BlockBlockerIdBlockedIdCompoundUniqueInputObjectZodSchema = makeSchema();
