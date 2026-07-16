import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutInviteeInputObjectSchema as InvitationUpdateWithoutInviteeInputObjectSchema } from './InvitationUpdateWithoutInviteeInput.schema';
import { InvitationUncheckedUpdateWithoutInviteeInputObjectSchema as InvitationUncheckedUpdateWithoutInviteeInputObjectSchema } from './InvitationUncheckedUpdateWithoutInviteeInput.schema';
import { InvitationCreateWithoutInviteeInputObjectSchema as InvitationCreateWithoutInviteeInputObjectSchema } from './InvitationCreateWithoutInviteeInput.schema';
import { InvitationUncheckedCreateWithoutInviteeInputObjectSchema as InvitationUncheckedCreateWithoutInviteeInputObjectSchema } from './InvitationUncheckedCreateWithoutInviteeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InvitationUpdateWithoutInviteeInputObjectSchema), z.lazy(() => InvitationUncheckedUpdateWithoutInviteeInputObjectSchema)]),
  create: z.union([z.lazy(() => InvitationCreateWithoutInviteeInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutInviteeInputObjectSchema)])
}).strict();
export const InvitationUpsertWithWhereUniqueWithoutInviteeInputObjectSchema: z.ZodType<Prisma.InvitationUpsertWithWhereUniqueWithoutInviteeInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUpsertWithWhereUniqueWithoutInviteeInput>;
export const InvitationUpsertWithWhereUniqueWithoutInviteeInputObjectZodSchema = makeSchema();
