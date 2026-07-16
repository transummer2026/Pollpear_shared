import * as z from 'zod';

export const OptionScalarFieldEnumSchema = z.enum(['id', 'label', 'sliderLeftLabel', 'sliderRightLabel', 'order', 'isDeleted', 'pollId'])

export type OptionScalarFieldEnum = z.infer<typeof OptionScalarFieldEnumSchema>;