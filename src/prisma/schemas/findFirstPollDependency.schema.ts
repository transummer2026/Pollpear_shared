import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencyOrderByWithRelationInputObjectSchema as PollDependencyOrderByWithRelationInputObjectSchema } from './objects/PollDependencyOrderByWithRelationInput.schema';
import { PollDependencyWhereInputObjectSchema as PollDependencyWhereInputObjectSchema } from './objects/PollDependencyWhereInput.schema';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './objects/PollDependencyWhereUniqueInput.schema';
import { PollDependencyScalarFieldEnumSchema } from './enums/PollDependencyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PollDependencyFindFirstSelectSchema: z.ZodType<Prisma.PollDependencySelect> = z.object({
    id: z.boolean().optional(),
    childPollId: z.boolean().optional(),
    optionId: z.boolean().optional(),
    childPoll: z.boolean().optional(),
    option: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PollDependencySelect>;

export const PollDependencyFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    childPollId: z.boolean().optional(),
    optionId: z.boolean().optional(),
    childPoll: z.boolean().optional(),
    option: z.boolean().optional()
  }).strict();

export const PollDependencyFindFirstSchema: z.ZodType<Prisma.PollDependencyFindFirstArgs> = z.object({ select: PollDependencyFindFirstSelectSchema.optional(),  orderBy: z.union([PollDependencyOrderByWithRelationInputObjectSchema, PollDependencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollDependencyWhereInputObjectSchema.optional(), cursor: PollDependencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollDependencyScalarFieldEnumSchema, PollDependencyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PollDependencyFindFirstArgs>;

export const PollDependencyFindFirstZodSchema = z.object({ select: PollDependencyFindFirstSelectSchema.optional(),  orderBy: z.union([PollDependencyOrderByWithRelationInputObjectSchema, PollDependencyOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollDependencyWhereInputObjectSchema.optional(), cursor: PollDependencyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PollDependencyScalarFieldEnumSchema, PollDependencyScalarFieldEnumSchema.array()]).optional() }).strict();