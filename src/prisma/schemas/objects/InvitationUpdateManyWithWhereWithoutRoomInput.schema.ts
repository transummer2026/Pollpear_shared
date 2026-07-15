import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationScalarWhereInputObjectSchema as InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema';
import { InvitationUpdateManyMutationInputObjectSchema as InvitationUpdateManyMutationInputObjectSchema } from './InvitationUpdateManyMutationInput.schema';
import { InvitationUncheckedUpdateManyWithoutRoomInputObjectSchema as InvitationUncheckedUpdateManyWithoutRoomInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InvitationUpdateManyMutationInputObjectSchema), z.lazy(() => InvitationUncheckedUpdateManyWithoutRoomInputObjectSchema)])
}).strict();
export const InvitationUpdateManyWithWhereWithoutRoomInputObjectSchema: z.ZodType<Prisma.InvitationUpdateManyWithWhereWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUpdateManyWithWhereWithoutRoomInput>;
export const InvitationUpdateManyWithWhereWithoutRoomInputObjectZodSchema = makeSchema();
