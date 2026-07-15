import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutInviteeInputObjectSchema as InvitationUpdateWithoutInviteeInputObjectSchema } from './InvitationUpdateWithoutInviteeInput.schema';
import { InvitationUncheckedUpdateWithoutInviteeInputObjectSchema as InvitationUncheckedUpdateWithoutInviteeInputObjectSchema } from './InvitationUncheckedUpdateWithoutInviteeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InvitationUpdateWithoutInviteeInputObjectSchema), z.lazy(() => InvitationUncheckedUpdateWithoutInviteeInputObjectSchema)])
}).strict();
export const InvitationUpdateWithWhereUniqueWithoutInviteeInputObjectSchema: z.ZodType<Prisma.InvitationUpdateWithWhereUniqueWithoutInviteeInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUpdateWithWhereUniqueWithoutInviteeInput>;
export const InvitationUpdateWithWhereUniqueWithoutInviteeInputObjectZodSchema = makeSchema();
