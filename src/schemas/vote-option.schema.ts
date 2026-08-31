import { z } from 'zod';
import { VoteOptionSchema as VoteOptionModelSchema } from '../prisma/schemas/models/VoteOption.schema';

/**
 * Alias over the generated model for the vote/option join table. The vote
 * schemas only ever `.pick({ optionId: true })` from it - a ballot names the
 * options it selects, the rest of the row is filled in server-side.
 */
export const VoteOptionSchema = VoteOptionModelSchema;

export type VoteOptionDTO = z.infer<typeof VoteOptionSchema>;
