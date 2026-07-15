import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberSelectObjectSchema as RoomMemberSelectObjectSchema } from './objects/RoomMemberSelect.schema';
import { RoomMemberCreateManyInputObjectSchema as RoomMemberCreateManyInputObjectSchema } from './objects/RoomMemberCreateManyInput.schema';

export const RoomMemberCreateManyAndReturnSchema: z.ZodType<Prisma.RoomMemberCreateManyAndReturnArgs> = z.object({ select: RoomMemberSelectObjectSchema.optional(), data: z.union([ RoomMemberCreateManyInputObjectSchema, z.array(RoomMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RoomMemberCreateManyAndReturnArgs>;

export const RoomMemberCreateManyAndReturnZodSchema = z.object({ select: RoomMemberSelectObjectSchema.optional(), data: z.union([ RoomMemberCreateManyInputObjectSchema, z.array(RoomMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();