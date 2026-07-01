import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomUncheckedCreateInputObjectSchema as RoomUncheckedCreateInputObjectSchema } from './objects/RoomUncheckedCreateInput.schema';

export const RoomCreateOneSchema: z.ZodType<Prisma.RoomCreateArgs> = z.object({   data: RoomUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoomCreateArgs>;

export const RoomCreateOneZodSchema = z.object({   data: RoomUncheckedCreateInputObjectSchema }).strict();