import * as z from "zod";

export const PollTemplateScalarFieldEnumSchema = z.enum(["userId", "pollId"]);

export type PollTemplateScalarFieldEnum = z.infer<
  typeof PollTemplateScalarFieldEnumSchema
>;
