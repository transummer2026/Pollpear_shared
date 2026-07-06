import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { OauthProviderSchema } from "../enums/OauthProvider.schema";
import { EnumOauthProviderFieldUpdateOperationsInputObjectSchema as EnumOauthProviderFieldUpdateOperationsInputObjectSchema } from "./EnumOauthProviderFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { GrantTypeSchema } from "../enums/GrantType.schema";
import { EnumGrantTypeFieldUpdateOperationsInputObjectSchema as EnumGrantTypeFieldUpdateOperationsInputObjectSchema } from "./EnumGrantTypeFieldUpdateOperationsInput.schema";

const makeSchema = () =>
  z
    .object({
      provider: z
        .union([
          OauthProviderSchema,
          z.lazy(() => EnumOauthProviderFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      providerUserId: z
        .union([
          z.string().max(255),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      providerUrl: z
        .union([
          z.string().max(255),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      accessToken: z
        .union([
          z.string().max(255),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      refreshToken: z
        .union([
          z.string().max(255),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      tokenType: z
        .union([
          z.string().max(255),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      scope: z
        .union([
          z.string().max(255),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      grantType: z
        .union([
          GrantTypeSchema,
          z.lazy(() => EnumGrantTypeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      userId: z.number().int(),
    })
    .strict();
export const OauthUpdateInputObjectSchema: z.ZodType<Prisma.OauthUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.OauthUpdateInput>;
export const OauthUpdateInputObjectZodSchema = makeSchema();
