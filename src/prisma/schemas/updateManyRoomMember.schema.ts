import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { RoomMemberUpdateManyMutationInputObjectSchema as RoomMemberUpdateManyMutationInputObjectSchema } from './objects/RoomMemberUpdateManyMutationInput.schema';
import { RoomMemberWhereInputObjectSchema as RoomMemberWhereInputObjectSchema } from './objects/RoomMemberWhereInput.schema';

export const RoomMemberUpdateManySchema: z.ZodType<Prisma.RoomMemberUpdateManyArgs> = z.object({ data: RoomMemberUpdateManyMutationInputObjectSchema, where: RoomMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RoomMemberUpdateManyArgs>;

export const RoomMemberUpdateManyZodSchema = z.object({ data: RoomMemberUpdateManyMutationInputObjectSchema, where: RoomMemberWhereInputObjectSchema.optional() }).strict();