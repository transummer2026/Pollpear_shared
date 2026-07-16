import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationCreateWithoutInviteeInputObjectSchema as InvitationCreateWithoutInviteeInputObjectSchema } from './InvitationCreateWithoutInviteeInput.schema';
import { InvitationUncheckedCreateWithoutInviteeInputObjectSchema as InvitationUncheckedCreateWithoutInviteeInputObjectSchema } from './InvitationUncheckedCreateWithoutInviteeInput.schema';
import { InvitationCreateOrConnectWithoutInviteeInputObjectSchema as InvitationCreateOrConnectWithoutInviteeInputObjectSchema } from './InvitationCreateOrConnectWithoutInviteeInput.schema';
import { InvitationUpsertWithWhereUniqueWithoutInviteeInputObjectSchema as InvitationUpsertWithWhereUniqueWithoutInviteeInputObjectSchema } from './InvitationUpsertWithWhereUniqueWithoutInviteeInput.schema';
import { InvitationCreateManyInviteeInputEnvelopeObjectSchema as InvitationCreateManyInviteeInputEnvelopeObjectSchema } from './InvitationCreateManyInviteeInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithWhereUniqueWithoutInviteeInputObjectSchema as InvitationUpdateWithWhereUniqueWithoutInviteeInputObjectSchema } from './InvitationUpdateWithWhereUniqueWithoutInviteeInput.schema';
import { InvitationUpdateManyWithWhereWithoutInviteeInputObjectSchema as InvitationUpdateManyWithWhereWithoutInviteeInputObjectSchema } from './InvitationUpdateManyWithWhereWithoutInviteeInput.schema';
import { InvitationScalarWhereInputObjectSchema as InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InvitationCreateWithoutInviteeInputObjectSchema), z.lazy(() => InvitationCreateWithoutInviteeInputObjectSchema).array(), z.lazy(() => InvitationUncheckedCreateWithoutInviteeInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutInviteeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InvitationCreateOrConnectWithoutInviteeInputObjectSchema), z.lazy(() => InvitationCreateOrConnectWithoutInviteeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InvitationUpsertWithWhereUniqueWithoutInviteeInputObjectSchema), z.lazy(() => InvitationUpsertWithWhereUniqueWithoutInviteeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InvitationCreateManyInviteeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InvitationUpdateWithWhereUniqueWithoutInviteeInputObjectSchema), z.lazy(() => InvitationUpdateWithWhereUniqueWithoutInviteeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InvitationUpdateManyWithWhereWithoutInviteeInputObjectSchema), z.lazy(() => InvitationUpdateManyWithWhereWithoutInviteeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InvitationScalarWhereInputObjectSchema), z.lazy(() => InvitationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InvitationUncheckedUpdateManyWithoutInviteeNestedInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutInviteeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutInviteeNestedInput>;
export const InvitationUncheckedUpdateManyWithoutInviteeNestedInputObjectZodSchema = makeSchema();
