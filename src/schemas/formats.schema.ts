import { z } from 'zod';

/**
 * Field-level formats reused across the auth and user schemas, so a rule such
 * as the password policy is written once and every flow that touches it (sign
 * up, reset, change) enforces the same thing.
 */

export const EmailFormat = z.email('Invalid e-mail');

/** Minimum policy for any password the user sets. Messages are user-facing. */
export const PasswordFormat = z
  .string()
  .min(12, 'Min 12 characters')
  .regex(/[A-Z]/, 'Min one capital letter')
  .regex(/[0-9]/, 'Min one digit');

/**
 * Coerced because a date input posts a string; the lower bound catches typos
 * in the year, and the refine enforces the 13-and-over rule by comparing
 * against today shifted back 13 years rather than by counting elapsed
 * milliseconds, which keeps leap years and month lengths out of it.
 */
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
