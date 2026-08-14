import { z } from 'zod';

export const EmailFormat = z.email('Invalid e-mail');

export const PasswordFormat = z
  .string()
  .min(12, 'Min 12 characters')
  .regex(/[A-Z]/, 'Min one capital letter')
  .regex(/[0-9]/, 'Min one digit');

export const BirthdateFormat = z.coerce
  .date({ error: 'Enter your birthdate' })
  .min(new Date('1900-01-01'), { error: 'Too old!' })
  .refine((date) => {
    const today = new Date();
    const minDate = new Date(
      today.getFullYear() - 13,
      today.getMonth(),
      today.getDate(),
    );
    return date <= minDate;
  }, 'User must be at least 13 years old');
