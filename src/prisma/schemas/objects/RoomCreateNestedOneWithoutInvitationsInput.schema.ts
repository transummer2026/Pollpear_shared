import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutInvitationsInputObjectSchema as RoomCreateWithoutInvitationsInputObjectSchema } from './RoomCreateWithoutInvitationsInput.schema';
import { RoomUncheckedCreateWithoutInvitationsInputObjectSchema as RoomUncheckedCreateWithoutInvitationsInputObjectSchema } from './RoomUncheckedCreateWithoutInvitationsInput.schema';
import { RoomCreateOrConnectWithoutInvitationsInputObjectSchema as RoomCreateOrConnectWithoutInvitationsInputObjectSchema } from './RoomCreateOrConnectWithoutInvitationsInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutInvitationsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutInvitationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutInvitationsInputObjectSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional()
}).strict();
export const RoomCreateNestedOneWithoutInvitationsInputObjectSchema: z.ZodType<Prisma.RoomCreateNestedOneWithoutInvitationsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateNestedOneWithoutInvitationsInput>;
export const RoomCreateNestedOneWithoutInvitationsInputObjectZodSchema = makeSchema();
