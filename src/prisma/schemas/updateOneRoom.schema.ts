import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomSelectObjectSchema as RoomSelectObjectSchema } from './objects/RoomSelect.schema';
import { RoomIncludeObjectSchema as RoomIncludeObjectSchema } from './objects/RoomInclude.schema';
import { RoomUpdateInputObjectSchema as RoomUpdateInputObjectSchema } from './objects/RoomUpdateInput.schema';
import { RoomUncheckedUpdateInputObjectSchema as RoomUncheckedUpdateInputObjectSchema } from './objects/RoomUncheckedUpdateInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './objects/RoomWhereUniqueInput.schema';

export const RoomUpdateOneSchema: z.ZodType<Prisma.RoomUpdateArgs> = z.object({ select: RoomSelectObjectSchema.optional(), include: RoomIncludeObjectSchema.optional(), data: z.union([RoomUpdateInputObjectSchema, RoomUncheckedUpdateInputObjectSchema]), where: RoomWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoomUpdateArgs>;

export const RoomUpdateOneZodSchema = z.object({ select: RoomSelectObjectSchema.optional(), include: RoomIncludeObjectSchema.optional(), data: z.union([RoomUpdateInputObjectSchema, RoomUncheckedUpdateInputObjectSchema]), where: RoomWhereUniqueInputObjectSchema }).strict();