import * as z from "zod";
// prettier-ignore
export const ApiKeyInputSchema = z.object({
    keyHash: z.string(),
    appName: z.string(),
    revoked: z.boolean(),
    ownerId: z.number().int(),
    user: z.unknown()
}).strict();

export type ApiKeyInputType = z.infer<typeof ApiKeyInputSchema>;
