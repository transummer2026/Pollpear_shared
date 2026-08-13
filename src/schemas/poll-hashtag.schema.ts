import { z } from 'zod';
import { PollHashtagSchema as PollHashtagModelSchema } from '../prisma/schemas/models/PollHashtag.schema';

export const PollHashtagSchema = PollHashtagModelSchema;

export type PollHashtagDTO = z.infer<typeof PollHashtagSchema>;
