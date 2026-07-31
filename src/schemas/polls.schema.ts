import { type z } from "zod";
import { PollSchema } from "../prisma/schemas/models/Poll.schema";

/**
 * this is everyhting the client is expected/allowed to send to us.
 * if a potential malicious user could modify a field, ommit it.
 */
export const PollDTOSchema = PollSchema.omit({
  id: true,
  createdAt: true,
  publishedAt: true,
  updatedAt: true,
  createdById: true,
  status: true,
});

export type PollDTO = z.infer<typeof PollDTOSchema>;
