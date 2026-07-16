import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateIncludeObjectSchema as PollTemplateIncludeObjectSchema } from './objects/PollTemplateInclude.schema';
import { PollTemplateOrderByWithRelationInputObjectSchema as PollTemplateOrderByWithRelationInputObjectSchema } from './objects/PollTemplateOrderByWithRelationInput.schema';
import { PollTemplateWhereInputObjectSchema as PollTemplateWhereInputObjectSchema } from './objects/PollTemplateWhereInput.schema';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './objects/PollTemplateWhereUniqueInput.schema';
import { PollTemplateScalarFieldEnumSchema } from './enums/PollTemplateScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PollTemplateFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PollTemplateSelect> = z.object({
    userId: z.boolean().optional(),
    pollId: z.boolean().optional(),
    user: z.boolean().optional(),
    poll: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PollTemplateSelect>;

export const PollTemplateFindFirstOrThrowSelectZodSchema = z.object({
    userId: z.boolean().optional(),
    pollId: z.boolean().optional(),
    user: z.boolean().optional(),
    poll: z.boolean().optional()
  }).strict();

export const PollTemplateFindFirstOrThrowSchema: z.ZodType<Prisma.PollTemplateFindFirstOrThrowArgs> = z.object({ select: PollTemplateFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PollTemplateIncludeObjectSchema.optional()), orderBy: z.union([PollTemplateOrderByWithRelationInputObjectSchema, PollTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollTemplateWhereInputObjectSchema.optional(), cursor: PollTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollTemplateScalarFieldEnumSchema, PollTemplateScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PollTemplateFindFirstOrThrowArgs>;

export const PollTemplateFindFirstOrThrowZodSchema = z.object({ select: PollTemplateFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PollTemplateIncludeObjectSchema.optional()), orderBy: z.union([PollTemplateOrderByWithRelationInputObjectSchema, PollTemplateOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollTemplateWhereInputObjectSchema.optional(), cursor: PollTemplateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollTemplateScalarFieldEnumSchema, PollTemplateScalarFieldEnumSchema.array()]).optional() }).strict();