import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserThemeSchema } from '../enums/UserTheme.schema'

const makeSchema = () => z.object({
  set: UserThemeSchema.optional()
}).strict();
export const EnumUserThemeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumUserThemeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserThemeFieldUpdateOperationsInput>;
export const EnumUserThemeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
