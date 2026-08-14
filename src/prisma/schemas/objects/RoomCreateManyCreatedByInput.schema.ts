import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { RoomStatusSchema } from '../enums/RoomStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  bannerUrl: z.string().max(255),
  publishedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  visibility: VisibilitySchema,
  status: RoomStatusSchema
}).strict();
export const RoomCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.RoomCreateManyCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateManyCreatedByInput>;
export const RoomCreateManyCreatedByInputObjectZodSchema = makeSchema();
