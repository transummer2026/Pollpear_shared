import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollScalarWhereInputObjectSchema as PollScalarWhereInputObjectSchema } from './PollScalarWhereInput.schema';
import { PollUpdateManyMutationInputObjectSchema as PollUpdateManyMutationInputObjectSchema } from './PollUpdateManyMutationInput.schema';
import { PollUncheckedUpdateManyWithoutRoomInputObjectSchema as PollUncheckedUpdateManyWithoutRoomInputObjectSchema } from './PollUncheckedUpdateManyWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PollUpdateManyMutationInputObjectSchema), z.lazy(() => PollUncheckedUpdateManyWithoutRoomInputObjectSchema)])
}).strict();
export const PollUpdateManyWithWhereWithoutRoomInputObjectSchema: z.ZodType<Prisma.PollUpdateManyWithWhereWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateManyWithWhereWithoutRoomInput>;
export const PollUpdateManyWithWhereWithoutRoomInputObjectZodSchema = makeSchema();
