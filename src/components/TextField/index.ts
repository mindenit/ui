import { VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes } from 'vue'

export const textFieldVariants = cva(
	'box-border inline-flex h-10 w-full min-w-48 items-stretch rounded-lg border-2 pl-2 pr-1 text-start has-[input:focus]:ring',
	{
		variants: {
			variant: {
				default:
					'border-fiord-400 has-[input:focus]:border-royal-blue-600 has-[input:focus]:ring-royal-blue-500/40 dark:border-fiord-600 dark:has-[input:disabled]:border-fiord-500 dark:has-[input:focus]:border-royal-blue-500 dark:has-[input:hover]:border-royal-blue-500',
				error:
					'dark:has-[input:focus]:border-amarath-500 border-amaranth-500 has-[input:focus]:border-amaranth-600 has-[input:hover]:border-amaranth-600 has-[input:focus]:ring-amaranth-500/40 dark:border-amaranth-700'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
)

export type TextFieldVariant = VariantProps<typeof textFieldVariants>

export interface TextFieldProps {
	class?: HTMLAttributes['class']
	error?: boolean
}
