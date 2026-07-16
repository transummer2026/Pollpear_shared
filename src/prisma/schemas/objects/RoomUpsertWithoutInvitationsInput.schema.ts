import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomUpdateWithoutInvitationsInputObjectSchema as RoomUpdateWithoutInvitationsInputObjectSchema } from './RoomUpdateWithoutInvitationsInput.schema';
import { RoomUncheckedUpdateWithoutInvitationsInputObjectSchema as RoomUncheckedUpdateWithoutInvitationsInputObjectSchema } from './RoomUncheckedUpdateWithoutInvitationsInput.schema';
import { RoomCreateWithoutInvitationsInputObjectSchema as RoomCreateWithoutInvitationsInputObjectSchema } from './RoomCreateWithoutInvitationsInput.schema';
import { RoomUncheckedCreateWithoutInvitationsInputObjectSchema as RoomUncheckedCreateWithoutInvitationsInputObjectSchema } from './RoomUncheckedCreateWithoutInvitationsInput.schema';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RoomUpdateWithoutInvitationsInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutInvitationsInputObjectSchema)]),
  create: z.union([z.lazy(() => RoomCreateWithoutInvitationsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutInvitationsInputObjectSchema)]),
  where: z.lazy(() => RoomWhereInputObjectSchema).optional()
}).strict();
export const RoomUpsertWithoutInvitationsInputObjectSchema: z.ZodType<Prisma.RoomUpsertWithoutInvitationsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpsertWithoutInvitationsInput>;
export const RoomUpsertWithoutInvitationsInputObjectZodSchema = makeSchema();
