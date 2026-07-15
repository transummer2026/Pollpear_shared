import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationWhereInputObjectSchema as InvitationWhereInputObjectSchema } from './InvitationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InvitationWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountInvitationsReceivedArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountInvitationsReceivedArgsObjectZodSchema = makeSchema();
