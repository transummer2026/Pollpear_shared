import * as z from "zod";

export const HashtagScalarFieldEnumSchema = z.enum(["id", "name", "isVisible"]);

export type HashtagScalarFieldEnum = z.infer<
  typeof HashtagScalarFieldEnumSchema
>;
