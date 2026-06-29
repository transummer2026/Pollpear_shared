import { z } from 'zod'

export const LoginSchema = z.object({
	email: z.string().email('Email invalide'),
	password: z.string().min(1, 'Mot de passe requis'),
})

export const RegisterSchema = z.object({
	username: z.string()
		.min(3, 'Au moins 3 caractères')
		.max(20, 'Maximum 20 caractères')
		.regex(/^[a-zA-Z0-9_-]+$/, 'Alphanumérique, _ et - uniquement'),
	email: z.string().email('Email invalide'),
	password: z.string()
		.min(8, 'Au moins 8 caractères')
		.regex(/[A-Z]/, 'Au moins une majuscule')
		.regex(/[0-9]/, 'Au moins un chiffre'),
})

export type LoginDto = z.infer<typeof LoginSchema>
export type RegisterDto = z.infer<typeof RegisterSchema>
