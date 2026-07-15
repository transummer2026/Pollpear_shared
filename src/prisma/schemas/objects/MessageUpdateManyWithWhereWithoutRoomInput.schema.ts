import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageScalarWhereInputObjectSchema as MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';
import { MessageUpdateManyMutationInputObjectSchema as MessageUpdateManyMutationInputObjectSchema } from './MessageUpdateManyMutationInput.schema';
import { MessageUncheckedUpdateManyWithoutRoomInputObjectSchema as MessageUncheckedUpdateManyWithoutRoomInputObjectSchema } from './MessageUncheckedUpdateManyWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MessageUpdateManyMutationInputObjectSchema), z.lazy(() => MessageUncheckedUpdateManyWithoutRoomInputObjectSchema)])
}).strict();
export const MessageUpdateManyWithWhereWithoutRoomInputObjectSchema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutRoomInput>;
export const MessageUpdateManyWithWhereWithoutRoomInputObjectZodSchema = makeSchema();
