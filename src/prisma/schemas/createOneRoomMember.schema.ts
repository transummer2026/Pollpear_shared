import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberSelectObjectSchema as RoomMemberSelectObjectSchema } from './objects/RoomMemberSelect.schema';
import { RoomMemberIncludeObjectSchema as RoomMemberIncludeObjectSchema } from './objects/RoomMemberInclude.schema';
import { RoomMemberCreateInputObjectSchema as RoomMemberCreateInputObjectSchema } from './objects/RoomMemberCreateInput.schema';
import { RoomMemberUncheckedCreateInputObjectSchema as RoomMemberUncheckedCreateInputObjectSchema } from './objects/RoomMemberUncheckedCreateInput.schema';

export const RoomMemberCreateOneSchema: z.ZodType<Prisma.RoomMemberCreateArgs> = z.object({ select: RoomMemberSelectObjectSchema.optional(), include: RoomMemberIncludeObjectSchema.optional(), data: z.union([RoomMemberCreateInputObjectSchema, RoomMemberUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RoomMemberCreateArgs>;

export const RoomMemberCreateOneZodSchema = z.object({ select: RoomMemberSelectObjectSchema.optional(), include: RoomMemberIncludeObjectSchema.optional(), data: z.union([RoomMemberCreateInputObjectSchema, RoomMemberUncheckedCreateInputObjectSchema]) }).strict();