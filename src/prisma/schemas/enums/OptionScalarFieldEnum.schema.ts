import * as z from 'zod';

export const OptionScalarFieldEnumSchema = z.enum(['id', 'text', 'sliderLeftLabel', 'sliderRightLabel', 'order', 'deletedAt', 'pollId'])

export type OptionScalarFieldEnum = z.infer<typeof OptionScalarFieldEnumSchema>;