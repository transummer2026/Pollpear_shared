import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomCreateWithoutInvitationsInputObjectSchema as RoomCreateWithoutInvitationsInputObjectSchema } from './RoomCreateWithoutInvitationsInput.schema';
import { RoomUncheckedCreateWithoutInvitationsInputObjectSchema as RoomUncheckedCreateWithoutInvitationsInputObjectSchema } from './RoomUncheckedCreateWithoutInvitationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoomCreateWithoutInvitationsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutInvitationsInputObjectSchema)])
}).strict();
export const RoomCreateOrConnectWithoutInvitationsInputObjectSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutInvitationsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateOrConnectWithoutInvitationsInput>;
export const RoomCreateOrConnectWithoutInvitationsInputObjectZodSchema = makeSchema();
