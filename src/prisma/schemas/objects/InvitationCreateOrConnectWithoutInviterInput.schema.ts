import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationCreateWithoutInviterInputObjectSchema as InvitationCreateWithoutInviterInputObjectSchema } from './InvitationCreateWithoutInviterInput.schema';
import { InvitationUncheckedCreateWithoutInviterInputObjectSchema as InvitationUncheckedCreateWithoutInviterInputObjectSchema } from './InvitationUncheckedCreateWithoutInviterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InvitationCreateWithoutInviterInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutInviterInputObjectSchema)])
}).strict();
export const InvitationCreateOrConnectWithoutInviterInputObjectSchema: z.ZodType<Prisma.InvitationCreateOrConnectWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateOrConnectWithoutInviterInput>;
export const InvitationCreateOrConnectWithoutInviterInputObjectZodSchema = makeSchema();
