import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberSelectObjectSchema as RoomMemberSelectObjectSchema } from './objects/RoomMemberSelect.schema';
import { RoomMemberIncludeObjectSchema as RoomMemberIncludeObjectSchema } from './objects/RoomMemberInclude.schema';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './objects/RoomMemberWhereUniqueInput.schema';
import { RoomMemberCreateInputObjectSchema as RoomMemberCreateInputObjectSchema } from './objects/RoomMemberCreateInput.schema';
import { RoomMemberUncheckedCreateInputObjectSchema as RoomMemberUncheckedCreateInputObjectSchema } from './objects/RoomMemberUncheckedCreateInput.schema';
import { RoomMemberUpdateInputObjectSchema as RoomMemberUpdateInputObjectSchema } from './objects/RoomMemberUpdateInput.schema';
import { RoomMemberUncheckedUpdateInputObjectSchema as RoomMemberUncheckedUpdateInputObjectSchema } from './objects/RoomMemberUncheckedUpdateInput.schema';

export const RoomMemberUpsertOneSchema: z.ZodType<Prisma.RoomMemberUpsertArgs> = z.object({ select: RoomMemberSelectObjectSchema.optional(), include: RoomMemberIncludeObjectSchema.optional(), where: RoomMemberWhereUniqueInputObjectSchema, create: z.union([ RoomMemberCreateInputObjectSchema, RoomMemberUncheckedCreateInputObjectSchema ]), update: z.union([ RoomMemberUpdateInputObjectSchema, RoomMemberUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RoomMemberUpsertArgs>;

export const RoomMemberUpsertOneZodSchema = z.object({ select: RoomMemberSelectObjectSchema.optional(), include: RoomMemberIncludeObjectSchema.optional(), where: RoomMemberWhereUniqueInputObjectSchema, create: z.union([ RoomMemberCreateInputObjectSchema, RoomMemberUncheckedCreateInputObjectSchema ]), update: z.union([ RoomMemberUpdateInputObjectSchema, RoomMemberUncheckedUpdateInputObjectSchema ]) }).strict();