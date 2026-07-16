import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationCreateWithoutInviterInputObjectSchema as InvitationCreateWithoutInviterInputObjectSchema } from './InvitationCreateWithoutInviterInput.schema';
import { InvitationUncheckedCreateWithoutInviterInputObjectSchema as InvitationUncheckedCreateWithoutInviterInputObjectSchema } from './InvitationUncheckedCreateWithoutInviterInput.schema';
import { InvitationCreateOrConnectWithoutInviterInputObjectSchema as InvitationCreateOrConnectWithoutInviterInputObjectSchema } from './InvitationCreateOrConnectWithoutInviterInput.schema';
import { InvitationCreateManyInviterInputEnvelopeObjectSchema as InvitationCreateManyInviterInputEnvelopeObjectSchema } from './InvitationCreateManyInviterInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InvitationCreateWithoutInviterInputObjectSchema), z.lazy(() => InvitationCreateWithoutInviterInputObjectSchema).array(), z.lazy(() => InvitationUncheckedCreateWithoutInviterInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutInviterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InvitationCreateOrConnectWithoutInviterInputObjectSchema), z.lazy(() => InvitationCreateOrConnectWithoutInviterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InvitationCreateManyInviterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InvitationUncheckedCreateNestedManyWithoutInviterInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedCreateNestedManyWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedCreateNestedManyWithoutInviterInput>;
export const InvitationUncheckedCreateNestedManyWithoutInviterInputObjectZodSchema = makeSchema();
