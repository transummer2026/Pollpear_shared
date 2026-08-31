import { z } from 'zod';
import { PollHashtagSchema as PollHashtagModelSchema } from '../prisma/schemas/models/PollHashtag.schema';

/**
 * Alias over the generated model for the poll/hashtag join table. Nothing to
 * validate beyond the columns, but going through this module keeps the public
 * name stable if the generated tree is regenerated, and leaves somewhere to
 * add rules later.
 */
export const PollHashtagSchema = PollHashtagModelSchema;

export type PollHashtagDTO = z.infer<typeof PollHashtagSchema>;
