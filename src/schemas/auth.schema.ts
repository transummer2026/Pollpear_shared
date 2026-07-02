import { z } from 'zod'
import { UserProfileSchema } from './users.schema'

export const RegisterSchema = z.object({
	...UserProfileSchema.shape,
	username: UserProfileSchema.shape.username.min(3, 'Au moins 3 caractères')
		.max(20, 'Maximum 20 caractères')
		.regex(/^[a-zA-Z0-9_-]+$/, 'Alphanumérique, _ et - uniquement'),
	email: UserProfileSchema.shape.email.email('Email invalide'),
	password: z.string()
		.min(8, 'Au moins 8 caractères')
		.regex(/[A-Z]/, 'Au moins une majuscule')
		.regex(/[0-9]/, 'Au moins un chiffre'),
	confirmPassword: z.string().min(1, 'Confirmation requise'),
}).refine(data => data.password === data.confirmPassword, {
	message: 'Les mots de passe ne correspondent pas',
	path: ['confirmPassword'],
})

export type RegisterDTO = z.infer<typeof RegisterSchema>
