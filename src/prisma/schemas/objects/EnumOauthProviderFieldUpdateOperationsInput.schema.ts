import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthProviderSchema } from '../enums/OauthProvider.schema'

const makeSchema = () => z.object({
  set: OauthProviderSchema.optional()
}).strict();
export const EnumOauthProviderFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumOauthProviderFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumOauthProviderFieldUpdateOperationsInput>;
export const EnumOauthProviderFieldUpdateOperationsInputObjectZodSchema = makeSchema();
