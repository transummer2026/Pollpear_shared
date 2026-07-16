import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationCreateWithoutInviteeInputObjectSchema as InvitationCreateWithoutInviteeInputObjectSchema } from './InvitationCreateWithoutInviteeInput.schema';
import { InvitationUncheckedCreateWithoutInviteeInputObjectSchema as InvitationUncheckedCreateWithoutInviteeInputObjectSchema } from './InvitationUncheckedCreateWithoutInviteeInput.schema';
import { InvitationCreateOrConnectWithoutInviteeInputObjectSchema as InvitationCreateOrConnectWithoutInviteeInputObjectSchema } from './InvitationCreateOrConnectWithoutInviteeInput.schema';
import { InvitationCreateManyInviteeInputEnvelopeObjectSchema as InvitationCreateManyInviteeInputEnvelopeObjectSchema } from './InvitationCreateManyInviteeInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InvitationCreateWithoutInviteeInputObjectSchema), z.lazy(() => InvitationCreateWithoutInviteeInputObjectSchema).array(), z.lazy(() => InvitationUncheckedCreateWithoutInviteeInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutInviteeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InvitationCreateOrConnectWithoutInviteeInputObjectSchema), z.lazy(() => InvitationCreateOrConnectWithoutInviteeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InvitationCreateManyInviteeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InvitationUncheckedCreateNestedManyWithoutInviteeInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedCreateNestedManyWithoutInviteeInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedCreateNestedManyWithoutInviteeInput>;
export const InvitationUncheckedCreateNestedManyWithoutInviteeInputObjectZodSchema = makeSchema();
