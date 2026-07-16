import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutInviterInputObjectSchema as InvitationUpdateWithoutInviterInputObjectSchema } from './InvitationUpdateWithoutInviterInput.schema';
import { InvitationUncheckedUpdateWithoutInviterInputObjectSchema as InvitationUncheckedUpdateWithoutInviterInputObjectSchema } from './InvitationUncheckedUpdateWithoutInviterInput.schema';
import { InvitationCreateWithoutInviterInputObjectSchema as InvitationCreateWithoutInviterInputObjectSchema } from './InvitationCreateWithoutInviterInput.schema';
import { InvitationUncheckedCreateWithoutInviterInputObjectSchema as InvitationUncheckedCreateWithoutInviterInputObjectSchema } from './InvitationUncheckedCreateWithoutInviterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InvitationUpdateWithoutInviterInputObjectSchema), z.lazy(() => InvitationUncheckedUpdateWithoutInviterInputObjectSchema)]),
  create: z.union([z.lazy(() => InvitationCreateWithoutInviterInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutInviterInputObjectSchema)])
}).strict();
export const InvitationUpsertWithWhereUniqueWithoutInviterInputObjectSchema: z.ZodType<Prisma.InvitationUpsertWithWhereUniqueWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUpsertWithWhereUniqueWithoutInviterInput>;
export const InvitationUpsertWithWhereUniqueWithoutInviterInputObjectZodSchema = makeSchema();
