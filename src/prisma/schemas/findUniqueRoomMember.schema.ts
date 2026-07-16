import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberSelectObjectSchema as RoomMemberSelectObjectSchema } from './objects/RoomMemberSelect.schema';
import { RoomMemberIncludeObjectSchema as RoomMemberIncludeObjectSchema } from './objects/RoomMemberInclude.schema';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './objects/RoomMemberWhereUniqueInput.schema';

export const RoomMemberFindUniqueSchema: z.ZodType<Prisma.RoomMemberFindUniqueArgs> = z.object({ select: RoomMemberSelectObjectSchema.optional(), include: RoomMemberIncludeObjectSchema.optional(), where: RoomMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoomMemberFindUniqueArgs>;

export const RoomMemberFindUniqueZodSchema = z.object({ select: RoomMemberSelectObjectSchema.optional(), include: RoomMemberIncludeObjectSchema.optional(), where: RoomMemberWhereUniqueInputObjectSchema }).strict();