import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageScalarWhereInputObjectSchema as MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';
import { MessageUpdateManyMutationInputObjectSchema as MessageUpdateManyMutationInputObjectSchema } from './MessageUpdateManyMutationInput.schema';
import { MessageUncheckedUpdateManyWithoutAuthorInputObjectSchema as MessageUncheckedUpdateManyWithoutAuthorInputObjectSchema } from './MessageUncheckedUpdateManyWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MessageUpdateManyMutationInputObjectSchema), z.lazy(() => MessageUncheckedUpdateManyWithoutAuthorInputObjectSchema)])
}).strict();
export const MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutAuthorInput>;
export const MessageUpdateManyWithWhereWithoutAuthorInputObjectZodSchema = makeSchema();
