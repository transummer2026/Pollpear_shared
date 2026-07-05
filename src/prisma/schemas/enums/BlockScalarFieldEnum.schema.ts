import * as z from "zod";

export const BlockScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "blockerId",
  "blockedId",
]);

export type BlockScalarFieldEnum = z.infer<typeof BlockScalarFieldEnumSchema>;
