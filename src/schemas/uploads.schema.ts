import { z } from "zod";

export const IMAGE_ALLOWED_MIME = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/tiff",
  "image/gif",
  "image/heif",
  "image/heic",
] as const;

export const IMAGE_MAX_BYTES = 12 * 1024 * 1024;

export const UploadImageMetaSchema = z.object({
  mimetype: z.enum(IMAGE_ALLOWED_MIME),
  size: z.number().int().positive().max(IMAGE_MAX_BYTES),
});

export type UploadImageMeta = z.infer<typeof UploadImageMetaSchema>;
