import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomScalarWhereInputObjectSchema as RoomScalarWhereInputObjectSchema } from './RoomScalarWhereInput.schema';
import { RoomUpdateManyMutationInputObjectSchema as RoomUpdateManyMutationInputObjectSchema } from './RoomUpdateManyMutationInput.schema';
import { RoomUncheckedUpdateManyWithoutCreatedByInputObjectSchema as RoomUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './RoomUncheckedUpdateManyWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RoomUpdateManyMutationInputObjectSchema), z.lazy(() => RoomUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const RoomUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.RoomUpdateManyWithWhereWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateManyWithWhereWithoutCreatedByInput>;
export const RoomUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = makeSchema();
