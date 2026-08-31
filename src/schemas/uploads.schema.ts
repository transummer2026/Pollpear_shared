import { z } from 'zod';

/**
 * `as const` so the tuple can feed `z.enum` below and the file input can build
 * its `accept` list from the same source.
 */
export const IMAGE_ALLOWED_MIME = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'image/tiff',
  'image/gif',
  'image/heif',
  'image/heic',
] as const;

/** 12 MiB, matching the body limit the upload route is configured with. */
export const IMAGE_MAX_BYTES = 12 * 1024 * 1024;

/**
 * Checks the multipart metadata only: the mimetype as *declared* by the
 * client, and the byte count. It says nothing about the bytes themselves, so
 * treat it as a cheap first filter that rejects the obvious cases before
 * anything is buffered - not as the security boundary. That remains the
 * server-side decode, which is the only thing that can tell a real image from
 * a file wearing the right header.
 */
export const UploadImageMetaSchema = z.object({
  mimetype: z.enum(IMAGE_ALLOWED_MIME),
  size: z.number().int().positive().max(IMAGE_MAX_BYTES, 'Image too large'),
});

export type UploadImageMeta = z.infer<typeof UploadImageMetaSchema>;
