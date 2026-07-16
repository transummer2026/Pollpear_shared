import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountRoomsCreatedArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountRoomsCreatedArgsObjectZodSchema = makeSchema();
