import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberSelectObjectSchema as RoomMemberSelectObjectSchema } from './objects/RoomMemberSelect.schema';
import { RoomMemberIncludeObjectSchema as RoomMemberIncludeObjectSchema } from './objects/RoomMemberInclude.schema';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './objects/RoomMemberWhereUniqueInput.schema';

export const RoomMemberFindUniqueOrThrowSchema: z.ZodType<Prisma.RoomMemberFindUniqueOrThrowArgs> = z.object({ select: RoomMemberSelectObjectSchema.optional(), include: RoomMemberIncludeObjectSchema.optional(), where: RoomMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoomMemberFindUniqueOrThrowArgs>;

export const RoomMemberFindUniqueOrThrowZodSchema = z.object({ select: RoomMemberSelectObjectSchema.optional(), include: RoomMemberIncludeObjectSchema.optional(), where: RoomMemberWhereUniqueInputObjectSchema }).strict();