import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { FriendshipUncheckedCreateInputObjectSchema as FriendshipUncheckedCreateInputObjectSchema } from './objects/FriendshipUncheckedCreateInput.schema';

export const FriendshipCreateOneSchema: z.ZodType<Prisma.FriendshipCreateArgs> = z.object({   data: FriendshipUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FriendshipCreateArgs>;

export const FriendshipCreateOneZodSchema = z.object({   data: FriendshipUncheckedCreateInputObjectSchema }).strict();