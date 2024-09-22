import { VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes } from 'vue'

export const textFieldVariants = cva(
	'box-border inline-flex h-10 w-full min-w-48 items-stretch gap-2 rounded-lg border bg-white pl-3 pr-1 text-start has-[input:disabled]:cursor-not-allowed has-[input:disabled]:border-0 has-[input:disabled]:bg-fiord-200 has-[input:focus]:ring dark:bg-fiord-950 dark:has-[input:disabled]:bg-fiord-800 [&_button]:size-7 [&_button_svg]:size-4',
	{
		variants: {
			variant: {
				default:
					'border-fiord-300 has-[input:focus]:border-royal-blue-600 has-[input:hover]:border-fiord-400 has-[input:focus]:ring-royal-blue-500/40 dark:border-fiord-700 dark:has-[input:disabled]:border-fiord-500 dark:has-[input:focus]:border-royal-blue-500 dark:has-[input:hover]:border-fiord-600',
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

export interface TextFieldInputComponent {
	ref: HTMLInputElement | null
}

export interface TextFieldProps {
	class?: HTMLAttributes['class']
	error?: boolean
}

export { default as TextFieldInput } from './TextFieldInput.vue'
export { default as TextFieldRoot } from './TextFieldRoot.vue'
export { default as TextFieldSlot } from './TextFieldSlot.vue'
