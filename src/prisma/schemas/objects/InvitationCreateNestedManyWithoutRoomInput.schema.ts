import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationCreateWithoutRoomInputObjectSchema as InvitationCreateWithoutRoomInputObjectSchema } from './InvitationCreateWithoutRoomInput.schema';
import { InvitationUncheckedCreateWithoutRoomInputObjectSchema as InvitationUncheckedCreateWithoutRoomInputObjectSchema } from './InvitationUncheckedCreateWithoutRoomInput.schema';
import { InvitationCreateOrConnectWithoutRoomInputObjectSchema as InvitationCreateOrConnectWithoutRoomInputObjectSchema } from './InvitationCreateOrConnectWithoutRoomInput.schema';
import { InvitationCreateManyRoomInputEnvelopeObjectSchema as InvitationCreateManyRoomInputEnvelopeObjectSchema } from './InvitationCreateManyRoomInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InvitationCreateWithoutRoomInputObjectSchema), z.lazy(() => InvitationCreateWithoutRoomInputObjectSchema).array(), z.lazy(() => InvitationUncheckedCreateWithoutRoomInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutRoomInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InvitationCreateOrConnectWithoutRoomInputObjectSchema), z.lazy(() => InvitationCreateOrConnectWithoutRoomInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InvitationCreateManyRoomInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InvitationCreateNestedManyWithoutRoomInputObjectSchema: z.ZodType<Prisma.InvitationCreateNestedManyWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateNestedManyWithoutRoomInput>;
export const InvitationCreateNestedManyWithoutRoomInputObjectZodSchema = makeSchema();
