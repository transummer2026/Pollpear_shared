import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationCreateWithoutInviterInputObjectSchema as InvitationCreateWithoutInviterInputObjectSchema } from './InvitationCreateWithoutInviterInput.schema';
import { InvitationUncheckedCreateWithoutInviterInputObjectSchema as InvitationUncheckedCreateWithoutInviterInputObjectSchema } from './InvitationUncheckedCreateWithoutInviterInput.schema';
import { InvitationCreateOrConnectWithoutInviterInputObjectSchema as InvitationCreateOrConnectWithoutInviterInputObjectSchema } from './InvitationCreateOrConnectWithoutInviterInput.schema';
import { InvitationUpsertWithWhereUniqueWithoutInviterInputObjectSchema as InvitationUpsertWithWhereUniqueWithoutInviterInputObjectSchema } from './InvitationUpsertWithWhereUniqueWithoutInviterInput.schema';
import { InvitationCreateManyInviterInputEnvelopeObjectSchema as InvitationCreateManyInviterInputEnvelopeObjectSchema } from './InvitationCreateManyInviterInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithWhereUniqueWithoutInviterInputObjectSchema as InvitationUpdateWithWhereUniqueWithoutInviterInputObjectSchema } from './InvitationUpdateWithWhereUniqueWithoutInviterInput.schema';
import { InvitationUpdateManyWithWhereWithoutInviterInputObjectSchema as InvitationUpdateManyWithWhereWithoutInviterInputObjectSchema } from './InvitationUpdateManyWithWhereWithoutInviterInput.schema';
import { InvitationScalarWhereInputObjectSchema as InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InvitationCreateWithoutInviterInputObjectSchema), z.lazy(() => InvitationCreateWithoutInviterInputObjectSchema).array(), z.lazy(() => InvitationUncheckedCreateWithoutInviterInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutInviterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InvitationCreateOrConnectWithoutInviterInputObjectSchema), z.lazy(() => InvitationCreateOrConnectWithoutInviterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InvitationUpsertWithWhereUniqueWithoutInviterInputObjectSchema), z.lazy(() => InvitationUpsertWithWhereUniqueWithoutInviterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InvitationCreateManyInviterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InvitationUpdateWithWhereUniqueWithoutInviterInputObjectSchema), z.lazy(() => InvitationUpdateWithWhereUniqueWithoutInviterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InvitationUpdateManyWithWhereWithoutInviterInputObjectSchema), z.lazy(() => InvitationUpdateManyWithWhereWithoutInviterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InvitationScalarWhereInputObjectSchema), z.lazy(() => InvitationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InvitationUncheckedUpdateManyWithoutInviterNestedInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutInviterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutInviterNestedInput>;
export const InvitationUncheckedUpdateManyWithoutInviterNestedInputObjectZodSchema = makeSchema();
