import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthCreateManyUserInputObjectSchema as OauthCreateManyUserInputObjectSchema } from './OauthCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OauthCreateManyUserInputObjectSchema), z.lazy(() => OauthCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OauthCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.OauthCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OauthCreateManyUserInputEnvelope>;
export const OauthCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
