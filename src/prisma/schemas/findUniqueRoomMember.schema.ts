import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './objects/RoomMemberWhereUniqueInput.schema';

export const RoomMemberFindUniqueSchema: z.ZodType<Prisma.RoomMemberFindUniqueArgs> = z.object({   where: RoomMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoomMemberFindUniqueArgs>;

export const RoomMemberFindUniqueZodSchema = z.object({   where: RoomMemberWhereUniqueInputObjectSchema }).strict();