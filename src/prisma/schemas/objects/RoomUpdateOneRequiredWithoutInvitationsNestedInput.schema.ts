import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutInvitationsInputObjectSchema as RoomCreateWithoutInvitationsInputObjectSchema } from './RoomCreateWithoutInvitationsInput.schema';
import { RoomUncheckedCreateWithoutInvitationsInputObjectSchema as RoomUncheckedCreateWithoutInvitationsInputObjectSchema } from './RoomUncheckedCreateWithoutInvitationsInput.schema';
import { RoomCreateOrConnectWithoutInvitationsInputObjectSchema as RoomCreateOrConnectWithoutInvitationsInputObjectSchema } from './RoomCreateOrConnectWithoutInvitationsInput.schema';
import { RoomUpsertWithoutInvitationsInputObjectSchema as RoomUpsertWithoutInvitationsInputObjectSchema } from './RoomUpsertWithoutInvitationsInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomUpdateToOneWithWhereWithoutInvitationsInputObjectSchema as RoomUpdateToOneWithWhereWithoutInvitationsInputObjectSchema } from './RoomUpdateToOneWithWhereWithoutInvitationsInput.schema';
import { RoomUpdateWithoutInvitationsInputObjectSchema as RoomUpdateWithoutInvitationsInputObjectSchema } from './RoomUpdateWithoutInvitationsInput.schema';
import { RoomUncheckedUpdateWithoutInvitationsInputObjectSchema as RoomUncheckedUpdateWithoutInvitationsInputObjectSchema } from './RoomUncheckedUpdateWithoutInvitationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutInvitationsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutInvitationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutInvitationsInputObjectSchema).optional(),
  upsert: z.lazy(() => RoomUpsertWithoutInvitationsInputObjectSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RoomUpdateToOneWithWhereWithoutInvitationsInputObjectSchema), z.lazy(() => RoomUpdateWithoutInvitationsInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutInvitationsInputObjectSchema)]).optional()
}).strict();
export const RoomUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema: z.ZodType<Prisma.RoomUpdateOneRequiredWithoutInvitationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateOneRequiredWithoutInvitationsNestedInput>;
export const RoomUpdateOneRequiredWithoutInvitationsNestedInputObjectZodSchema = makeSchema();
