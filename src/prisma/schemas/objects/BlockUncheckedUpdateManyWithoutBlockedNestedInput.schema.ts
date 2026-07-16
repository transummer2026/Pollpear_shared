import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockCreateWithoutBlockedInputObjectSchema as BlockCreateWithoutBlockedInputObjectSchema } from './BlockCreateWithoutBlockedInput.schema';
import { BlockUncheckedCreateWithoutBlockedInputObjectSchema as BlockUncheckedCreateWithoutBlockedInputObjectSchema } from './BlockUncheckedCreateWithoutBlockedInput.schema';
import { BlockCreateOrConnectWithoutBlockedInputObjectSchema as BlockCreateOrConnectWithoutBlockedInputObjectSchema } from './BlockCreateOrConnectWithoutBlockedInput.schema';
import { BlockUpsertWithWhereUniqueWithoutBlockedInputObjectSchema as BlockUpsertWithWhereUniqueWithoutBlockedInputObjectSchema } from './BlockUpsertWithWhereUniqueWithoutBlockedInput.schema';
import { BlockCreateManyBlockedInputEnvelopeObjectSchema as BlockCreateManyBlockedInputEnvelopeObjectSchema } from './BlockCreateManyBlockedInputEnvelope.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './BlockWhereUniqueInput.schema';
import { BlockUpdateWithWhereUniqueWithoutBlockedInputObjectSchema as BlockUpdateWithWhereUniqueWithoutBlockedInputObjectSchema } from './BlockUpdateWithWhereUniqueWithoutBlockedInput.schema';
import { BlockUpdateManyWithWhereWithoutBlockedInputObjectSchema as BlockUpdateManyWithWhereWithoutBlockedInputObjectSchema } from './BlockUpdateManyWithWhereWithoutBlockedInput.schema';
import { BlockScalarWhereInputObjectSchema as BlockScalarWhereInputObjectSchema } from './BlockScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BlockCreateWithoutBlockedInputObjectSchema), z.lazy(() => BlockCreateWithoutBlockedInputObjectSchema).array(), z.lazy(() => BlockUncheckedCreateWithoutBlockedInputObjectSchema), z.lazy(() => BlockUncheckedCreateWithoutBlockedInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BlockCreateOrConnectWithoutBlockedInputObjectSchema), z.lazy(() => BlockCreateOrConnectWithoutBlockedInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BlockUpsertWithWhereUniqueWithoutBlockedInputObjectSchema), z.lazy(() => BlockUpsertWithWhereUniqueWithoutBlockedInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BlockCreateManyBlockedInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BlockWhereUniqueInputObjectSchema), z.lazy(() => BlockWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BlockWhereUniqueInputObjectSchema), z.lazy(() => BlockWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BlockWhereUniqueInputObjectSchema), z.lazy(() => BlockWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BlockWhereUniqueInputObjectSchema), z.lazy(() => BlockWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BlockUpdateWithWhereUniqueWithoutBlockedInputObjectSchema), z.lazy(() => BlockUpdateWithWhereUniqueWithoutBlockedInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BlockUpdateManyWithWhereWithoutBlockedInputObjectSchema), z.lazy(() => BlockUpdateManyWithWhereWithoutBlockedInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BlockScalarWhereInputObjectSchema), z.lazy(() => BlockScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BlockUncheckedUpdateManyWithoutBlockedNestedInputObjectSchema: z.ZodType<Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput>;
export const BlockUncheckedUpdateManyWithoutBlockedNestedInputObjectZodSchema = makeSchema();
