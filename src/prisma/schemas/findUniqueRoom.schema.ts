import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomSelectObjectSchema as RoomSelectObjectSchema } from './objects/RoomSelect.schema';
import { RoomIncludeObjectSchema as RoomIncludeObjectSchema } from './objects/RoomInclude.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './objects/RoomWhereUniqueInput.schema';

export const RoomFindUniqueSchema: z.ZodType<Prisma.RoomFindUniqueArgs> = z.object({ select: RoomSelectObjectSchema.optional(), include: RoomIncludeObjectSchema.optional(), where: RoomWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoomFindUniqueArgs>;

export const RoomFindUniqueZodSchema = z.object({ select: RoomSelectObjectSchema.optional(), include: RoomIncludeObjectSchema.optional(), where: RoomWhereUniqueInputObjectSchema }).strict();