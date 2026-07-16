import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomSelectObjectSchema as RoomSelectObjectSchema } from './objects/RoomSelect.schema';
import { RoomIncludeObjectSchema as RoomIncludeObjectSchema } from './objects/RoomInclude.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './objects/RoomWhereUniqueInput.schema';

export const RoomFindUniqueOrThrowSchema: z.ZodType<Prisma.RoomFindUniqueOrThrowArgs> = z.object({ select: RoomSelectObjectSchema.optional(), include: RoomIncludeObjectSchema.optional(), where: RoomWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoomFindUniqueOrThrowArgs>;

export const RoomFindUniqueOrThrowZodSchema = z.object({ select: RoomSelectObjectSchema.optional(), include: RoomIncludeObjectSchema.optional(), where: RoomWhereUniqueInputObjectSchema }).strict();