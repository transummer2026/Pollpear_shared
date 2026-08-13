import { z } from 'zod';
import { VoteOptionSchema as VoteOptionModelSchema } from '../prisma/schemas/models/VoteOption.schema';

export const VoteOptionSchema = VoteOptionModelSchema;

export type VoteOptionDTO = z.infer<typeof VoteOptionSchema>;
