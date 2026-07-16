import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberSelectObjectSchema as RoomMemberSelectObjectSchema } from './objects/RoomMemberSelect.schema';
import { RoomMemberUpdateManyMutationInputObjectSchema as RoomMemberUpdateManyMutationInputObjectSchema } from './objects/RoomMemberUpdateManyMutationInput.schema';
import { RoomMemberWhereInputObjectSchema as RoomMemberWhereInputObjectSchema } from './objects/RoomMemberWhereInput.schema';

export const RoomMemberUpdateManyAndReturnSchema: z.ZodType<Prisma.RoomMemberUpdateManyAndReturnArgs> = z.object({ select: RoomMemberSelectObjectSchema.optional(), data: RoomMemberUpdateManyMutationInputObjectSchema, where: RoomMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoomMemberUpdateManyAndReturnArgs>;

export const RoomMemberUpdateManyAndReturnZodSchema = z.object({ select: RoomMemberSelectObjectSchema.optional(), data: RoomMemberUpdateManyMutationInputObjectSchema, where: RoomMemberWhereInputObjectSchema.optional() }).strict();