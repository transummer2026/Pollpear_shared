import * as z from "zod";

export const PollDependencyScalarFieldEnumSchema = z.enum([
  "id",
  "childPollId",
  "optionId",
]);

export type PollDependencyScalarFieldEnum = z.infer<
  typeof PollDependencyScalarFieldEnumSchema
>;
