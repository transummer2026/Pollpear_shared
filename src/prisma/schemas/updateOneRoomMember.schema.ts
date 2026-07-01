import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberUpdateInputObjectSchema as RoomMemberUpdateInputObjectSchema } from './objects/RoomMemberUpdateInput.schema';
import { RoomMemberUncheckedUpdateInputObjectSchema as RoomMemberUncheckedUpdateInputObjectSchema } from './objects/RoomMemberUncheckedUpdateInput.schema';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './objects/RoomMemberWhereUniqueInput.schema';

export const RoomMemberUpdateOneSchema: z.ZodType<Prisma.RoomMemberUpdateArgs> = z.object({   data: z.union([RoomMemberUpdateInputObjectSchema, RoomMemberUncheckedUpdateInputObjectSchema]), where: RoomMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoomMemberUpdateArgs>;

export const RoomMemberUpdateOneZodSchema = z.object({   data: z.union([RoomMemberUpdateInputObjectSchema, RoomMemberUncheckedUpdateInputObjectSchema]), where: RoomMemberWhereUniqueInputObjectSchema }).strict();