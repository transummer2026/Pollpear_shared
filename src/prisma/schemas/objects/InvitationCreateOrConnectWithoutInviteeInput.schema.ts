import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationCreateWithoutInviteeInputObjectSchema as InvitationCreateWithoutInviteeInputObjectSchema } from './InvitationCreateWithoutInviteeInput.schema';
import { InvitationUncheckedCreateWithoutInviteeInputObjectSchema as InvitationUncheckedCreateWithoutInviteeInputObjectSchema } from './InvitationUncheckedCreateWithoutInviteeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InvitationCreateWithoutInviteeInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutInviteeInputObjectSchema)])
}).strict();
export const InvitationCreateOrConnectWithoutInviteeInputObjectSchema: z.ZodType<Prisma.InvitationCreateOrConnectWithoutInviteeInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateOrConnectWithoutInviteeInput>;
export const InvitationCreateOrConnectWithoutInviteeInputObjectZodSchema = makeSchema();
