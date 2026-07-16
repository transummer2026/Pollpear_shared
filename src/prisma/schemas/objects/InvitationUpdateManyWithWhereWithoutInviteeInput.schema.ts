import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationScalarWhereInputObjectSchema as InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema';
import { InvitationUpdateManyMutationInputObjectSchema as InvitationUpdateManyMutationInputObjectSchema } from './InvitationUpdateManyMutationInput.schema';
import { InvitationUncheckedUpdateManyWithoutInviteeInputObjectSchema as InvitationUncheckedUpdateManyWithoutInviteeInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutInviteeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InvitationUpdateManyMutationInputObjectSchema), z.lazy(() => InvitationUncheckedUpdateManyWithoutInviteeInputObjectSchema)])
}).strict();
export const InvitationUpdateManyWithWhereWithoutInviteeInputObjectSchema: z.ZodType<Prisma.InvitationUpdateManyWithWhereWithoutInviteeInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUpdateManyWithWhereWithoutInviteeInput>;
export const InvitationUpdateManyWithWhereWithoutInviteeInputObjectZodSchema = makeSchema();
