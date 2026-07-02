import { z } from 'zod'
import { UserProfileSchema } from './users.schema'

export const LoginSchema = z.object({
	...UserProfileSchema.shape,
	email: z.email('Invalid e-mail'),
	password: z.string()
		.min(12, 'Min 12 characters')
		.regex(/[A-Z]/, 'Min one capital letter')
		.regex(/[0-9]/, 'Min one digit'),
})

export type RegisterDTO = z.infer<typeof LoginSchema>
