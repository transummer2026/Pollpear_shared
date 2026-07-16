import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCreateWithoutVoteOptionsInputObjectSchema as VoteCreateWithoutVoteOptionsInputObjectSchema } from './VoteCreateWithoutVoteOptionsInput.schema';
import { VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema as VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema } from './VoteUncheckedCreateWithoutVoteOptionsInput.schema';
import { VoteCreateOrConnectWithoutVoteOptionsInputObjectSchema as VoteCreateOrConnectWithoutVoteOptionsInputObjectSchema } from './VoteCreateOrConnectWithoutVoteOptionsInput.schema';
import { VoteUpsertWithoutVoteOptionsInputObjectSchema as VoteUpsertWithoutVoteOptionsInputObjectSchema } from './VoteUpsertWithoutVoteOptionsInput.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateToOneWithWhereWithoutVoteOptionsInputObjectSchema as VoteUpdateToOneWithWhereWithoutVoteOptionsInputObjectSchema } from './VoteUpdateToOneWithWhereWithoutVoteOptionsInput.schema';
import { VoteUpdateWithoutVoteOptionsInputObjectSchema as VoteUpdateWithoutVoteOptionsInputObjectSchema } from './VoteUpdateWithoutVoteOptionsInput.schema';
import { VoteUncheckedUpdateWithoutVoteOptionsInputObjectSchema as VoteUncheckedUpdateWithoutVoteOptionsInputObjectSchema } from './VoteUncheckedUpdateWithoutVoteOptionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoteCreateWithoutVoteOptionsInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VoteCreateOrConnectWithoutVoteOptionsInputObjectSchema).optional(),
  upsert: z.lazy(() => VoteUpsertWithoutVoteOptionsInputObjectSchema).optional(),
  connect: z.lazy(() => VoteWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => VoteUpdateToOneWithWhereWithoutVoteOptionsInputObjectSchema), z.lazy(() => VoteUpdateWithoutVoteOptionsInputObjectSchema), z.lazy(() => VoteUncheckedUpdateWithoutVoteOptionsInputObjectSchema)]).optional()
}).strict();
export const VoteUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema: z.ZodType<Prisma.VoteUpdateOneRequiredWithoutVoteOptionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpdateOneRequiredWithoutVoteOptionsNestedInput>;
export const VoteUpdateOneRequiredWithoutVoteOptionsNestedInputObjectZodSchema = makeSchema();
