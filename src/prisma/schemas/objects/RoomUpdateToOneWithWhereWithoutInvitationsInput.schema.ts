import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema';
import { RoomUpdateWithoutInvitationsInputObjectSchema as RoomUpdateWithoutInvitationsInputObjectSchema } from './RoomUpdateWithoutInvitationsInput.schema';
import { RoomUncheckedUpdateWithoutInvitationsInputObjectSchema as RoomUncheckedUpdateWithoutInvitationsInputObjectSchema } from './RoomUncheckedUpdateWithoutInvitationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RoomUpdateWithoutInvitationsInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutInvitationsInputObjectSchema)])
}).strict();
export const RoomUpdateToOneWithWhereWithoutInvitationsInputObjectSchema: z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutInvitationsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutInvitationsInput>;
export const RoomUpdateToOneWithWhereWithoutInvitationsInputObjectZodSchema = makeSchema();
