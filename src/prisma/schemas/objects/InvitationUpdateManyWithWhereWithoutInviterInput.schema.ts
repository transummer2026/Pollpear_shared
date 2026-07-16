import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationScalarWhereInputObjectSchema as InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema';
import { InvitationUpdateManyMutationInputObjectSchema as InvitationUpdateManyMutationInputObjectSchema } from './InvitationUpdateManyMutationInput.schema';
import { InvitationUncheckedUpdateManyWithoutInviterInputObjectSchema as InvitationUncheckedUpdateManyWithoutInviterInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutInviterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InvitationUpdateManyMutationInputObjectSchema), z.lazy(() => InvitationUncheckedUpdateManyWithoutInviterInputObjectSchema)])
}).strict();
export const InvitationUpdateManyWithWhereWithoutInviterInputObjectSchema: z.ZodType<Prisma.InvitationUpdateManyWithWhereWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUpdateManyWithWhereWithoutInviterInput>;
export const InvitationUpdateManyWithWhereWithoutInviterInputObjectZodSchema = makeSchema();
