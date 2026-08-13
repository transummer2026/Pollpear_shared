import * as z from 'zod';
// prettier-ignore
export const ApiKeyResultSchema = z.object({
    id: z.number().int(),
    keyHash: z.string(),
    appName: z.string(),
    revoked: z.boolean(),
    expiredAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
    ownerId: z.number().int(),
    user: z.unknown()
}).strict();

export type ApiKeyResultType = z.infer<typeof ApiKeyResultSchema>;
