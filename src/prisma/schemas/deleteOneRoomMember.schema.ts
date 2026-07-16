import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberSelectObjectSchema as RoomMemberSelectObjectSchema } from './objects/RoomMemberSelect.schema';
import { RoomMemberIncludeObjectSchema as RoomMemberIncludeObjectSchema } from './objects/RoomMemberInclude.schema';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './objects/RoomMemberWhereUniqueInput.schema';

export const RoomMemberDeleteOneSchema: z.ZodType<Prisma.RoomMemberDeleteArgs> = z.object({ select: RoomMemberSelectObjectSchema.optional(), include: RoomMemberIncludeObjectSchema.optional(), where: RoomMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoomMemberDeleteArgs>;

export const RoomMemberDeleteOneZodSchema = z.object({ select: RoomMemberSelectObjectSchema.optional(), include: RoomMemberIncludeObjectSchema.optional(), where: RoomMemberWhereUniqueInputObjectSchema }).strict();