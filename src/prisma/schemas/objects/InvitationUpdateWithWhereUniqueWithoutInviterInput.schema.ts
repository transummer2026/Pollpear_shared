import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutInviterInputObjectSchema as InvitationUpdateWithoutInviterInputObjectSchema } from './InvitationUpdateWithoutInviterInput.schema';
import { InvitationUncheckedUpdateWithoutInviterInputObjectSchema as InvitationUncheckedUpdateWithoutInviterInputObjectSchema } from './InvitationUncheckedUpdateWithoutInviterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InvitationUpdateWithoutInviterInputObjectSchema), z.lazy(() => InvitationUncheckedUpdateWithoutInviterInputObjectSchema)])
}).strict();
export const InvitationUpdateWithWhereUniqueWithoutInviterInputObjectSchema: z.ZodType<Prisma.InvitationUpdateWithWhereUniqueWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUpdateWithWhereUniqueWithoutInviterInput>;
export const InvitationUpdateWithWhereUniqueWithoutInviterInputObjectZodSchema = makeSchema();
