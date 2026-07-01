import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomUpdateInputObjectSchema as RoomUpdateInputObjectSchema } from './objects/RoomUpdateInput.schema';
import { RoomUncheckedUpdateInputObjectSchema as RoomUncheckedUpdateInputObjectSchema } from './objects/RoomUncheckedUpdateInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './objects/RoomWhereUniqueInput.schema';

export const RoomUpdateOneSchema: z.ZodType<Prisma.RoomUpdateArgs> = z.object({   data: z.union([RoomUpdateInputObjectSchema, RoomUncheckedUpdateInputObjectSchema]), where: RoomWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoomUpdateArgs>;

export const RoomUpdateOneZodSchema = z.object({   data: z.union([RoomUpdateInputObjectSchema, RoomUncheckedUpdateInputObjectSchema]), where: RoomWhereUniqueInputObjectSchema }).strict();