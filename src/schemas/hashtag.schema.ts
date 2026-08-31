import { z } from 'zod';
import { HashtagSchema as HashtagModelSchema } from '../prisma/schemas/models/Hashtag.schema';

/**
 * The generated model only knows `name` is a string; the bounds are the
 * product rule. Hashtags are addressed by name everywhere on the write side -
 * see the `hashtags` field on the poll schemas - so this is the schema those
 * names are checked against.
 */
export const HashtagSchema = HashtagModelSchema.extend({
  name: HashtagModelSchema.shape.name
    .min(1, 'Hashtag name required')
    .max(255, 'Max 255 characters'),
});

export type HashtagDTO = z.infer<typeof HashtagSchema>;
