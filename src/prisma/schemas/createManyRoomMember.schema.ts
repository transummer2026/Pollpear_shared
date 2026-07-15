import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberCreateManyInputObjectSchema as RoomMemberCreateManyInputObjectSchema } from './objects/RoomMemberCreateManyInput.schema';

export const RoomMemberCreateManySchema: z.ZodType<Prisma.RoomMemberCreateManyArgs> = z.object({ data: z.union([ RoomMemberCreateManyInputObjectSchema, z.array(RoomMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RoomMemberCreateManyArgs>;

export const RoomMemberCreateManyZodSchema = z.object({ data: z.union([ RoomMemberCreateManyInputObjectSchema, z.array(RoomMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();