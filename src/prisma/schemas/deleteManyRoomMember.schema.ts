import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberWhereInputObjectSchema as RoomMemberWhereInputObjectSchema } from './objects/RoomMemberWhereInput.schema';

export const RoomMemberDeleteManySchema: z.ZodType<Prisma.RoomMemberDeleteManyArgs> = z.object({ where: RoomMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoomMemberDeleteManyArgs>;

export const RoomMemberDeleteManyZodSchema = z.object({ where: RoomMemberWhereInputObjectSchema.optional() }).strict();