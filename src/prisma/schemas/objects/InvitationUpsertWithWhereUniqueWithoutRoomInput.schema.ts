import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithoutRoomInputObjectSchema as InvitationUpdateWithoutRoomInputObjectSchema } from './InvitationUpdateWithoutRoomInput.schema';
import { InvitationUncheckedUpdateWithoutRoomInputObjectSchema as InvitationUncheckedUpdateWithoutRoomInputObjectSchema } from './InvitationUncheckedUpdateWithoutRoomInput.schema';
import { InvitationCreateWithoutRoomInputObjectSchema as InvitationCreateWithoutRoomInputObjectSchema } from './InvitationCreateWithoutRoomInput.schema';
import { InvitationUncheckedCreateWithoutRoomInputObjectSchema as InvitationUncheckedCreateWithoutRoomInputObjectSchema } from './InvitationUncheckedCreateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InvitationUpdateWithoutRoomInputObjectSchema), z.lazy(() => InvitationUncheckedUpdateWithoutRoomInputObjectSchema)]),
  create: z.union([z.lazy(() => InvitationCreateWithoutRoomInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutRoomInputObjectSchema)])
}).strict();
export const InvitationUpsertWithWhereUniqueWithoutRoomInputObjectSchema: z.ZodType<Prisma.InvitationUpsertWithWhereUniqueWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUpsertWithWhereUniqueWithoutRoomInput>;
export const InvitationUpsertWithWhereUniqueWithoutRoomInputObjectZodSchema = makeSchema();
