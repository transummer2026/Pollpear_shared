import { z } from 'zod';
import { HashtagSchema as HashtagModelSchema } from '../prisma/schemas/models/Hashtag.schema';

export const HashtagSchema = HashtagModelSchema.extend({
  name: HashtagModelSchema.shape.name
    .min(1, 'Hashtag name required')
    .max(255, 'Max 255 characters'),
});

export type HashtagDTO = z.infer<typeof HashtagSchema>;
