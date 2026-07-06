import * as z from "zod";

export const UserThemeSchema = z.enum(["light", "dark", "system", "other"]);

export type UserTheme = z.infer<typeof UserThemeSchema>;
