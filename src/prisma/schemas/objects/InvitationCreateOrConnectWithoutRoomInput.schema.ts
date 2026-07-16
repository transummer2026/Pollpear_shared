import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationCreateWithoutRoomInputObjectSchema as InvitationCreateWithoutRoomInputObjectSchema } from './InvitationCreateWithoutRoomInput.schema';
import { InvitationUncheckedCreateWithoutRoomInputObjectSchema as InvitationUncheckedCreateWithoutRoomInputObjectSchema } from './InvitationUncheckedCreateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InvitationCreateWithoutRoomInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutRoomInputObjectSchema)])
}).strict();
export const InvitationCreateOrConnectWithoutRoomInputObjectSchema: z.ZodType<Prisma.InvitationCreateOrConnectWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateOrConnectWithoutRoomInput>;
export const InvitationCreateOrConnectWithoutRoomInputObjectZodSchema = makeSchema();
