import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

export const textAreaVariants = tv({
	base: 'box-border inline-flex w-full min-w-48 items-stretch gap-2 rounded-lg border bg-white p-3 text-start has-[textarea:disabled]:cursor-not-allowed has-[textarea:disabled]:border-0 has-[textarea:disabled]:bg-fiord-200 has-[textarea:focus]:ring dark:bg-fiord-950 dark:has-[textarea:disabled]:bg-fiord-800 [&_button]:size-7 [&_button_svg]:size-4',
	variants: {
		variant: {
			default:
				'border-fiord-300 has-[textarea:focus]:border-royal-blue-600 has-[textarea:hover]:border-fiord-400 has-[textarea:focus]:ring-royal-blue-500/40 dark:border-fiord-700 dark:has-[textarea:disabled]:border-fiord-500 dark:has-[textarea:focus]:border-royal-blue-500 dark:has-[textarea:hover]:border-fiord-600',
			error:
				'dark:has-[textarea:focus]:border-amarath-500 border-amaranth-500 has-[textarea:focus]:border-amaranth-600 has-[textarea:hover]:border-amaranth-600 has-[textarea:focus]:ring-amaranth-500/40 dark:border-amaranth-700',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export type TextAreaVariant = VariantProps<typeof textAreaVariants>

export interface TextAreaInputComponent {
	ref: HTMLTextAreaElement | null
}

export interface TextAreaProps {
	class?: HTMLAttributes['class']
	error?: boolean
}

export { default as TextAreaInput } from './TextAreaInput.vue'
export { default as TextAreaRoot } from './TextAreaRoot.vue'
