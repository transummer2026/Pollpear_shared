import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutRoomInputObjectSchema as InvitationUpdateWithoutRoomInputObjectSchema } from './InvitationUpdateWithoutRoomInput.schema';
import { InvitationUncheckedUpdateWithoutRoomInputObjectSchema as InvitationUncheckedUpdateWithoutRoomInputObjectSchema } from './InvitationUncheckedUpdateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InvitationUpdateWithoutRoomInputObjectSchema), z.lazy(() => InvitationUncheckedUpdateWithoutRoomInputObjectSchema)])
}).strict();
export const InvitationUpdateWithWhereUniqueWithoutRoomInputObjectSchema: z.ZodType<Prisma.InvitationUpdateWithWhereUniqueWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUpdateWithWhereUniqueWithoutRoomInput>;
export const InvitationUpdateWithWhereUniqueWithoutRoomInputObjectZodSchema = makeSchema();
