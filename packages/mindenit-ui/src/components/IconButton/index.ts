import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

export const iconButtonVariants = tv({
	base: 'font-regular box-border inline-flex select-none items-center justify-center rounded-lg text-sm outline-none transition-all active:shadow-inner active:shadow-fiord-950/15 disabled:cursor-not-allowed disabled:shadow-none [&_svg]:size-5',
	variants: {
		variant: {
			primary:
				'bg-royal-blue-500 text-white hover:shadow-md hover:shadow-royal-blue-500/40 focus:ring focus:ring-royal-blue-500/40 active:bg-royal-blue-600 disabled:bg-royal-blue-200 disabled:text-royal-blue-600 dark:disabled:bg-royal-blue-950 dark:disabled:text-royal-blue-300',
			outlined:
				'border border-fiord-300 bg-white text-black hover:bg-fiord-50 hover:shadow-md hover:shadow-fiord-950/10 focus:border-fiord-400 focus:ring focus:ring-fiord-950/15 disabled:shadow-none dark:border-fiord-600 dark:bg-fiord-950 dark:text-fiord-300 dark:hover:border-fiord-500 dark:hover:bg-fiord-800 dark:hover:text-white dark:active:shadow-fiord-50/15 disabled:dark:border-none dark:disabled:bg-fiord-800 dark:disabled:text-fiord-400',
			danger:
				'dark:disabled:textamaranth-400 bg-amaranth-500 text-white hover:shadow-md hover:shadow-amaranth-500/40 focus:ring focus:ring-amaranth-500/40 active:bg-amaranth-600 active:shadow-inner active:shadow-fiord-950/15 disabled:bg-amaranth-300 disabled:text-amaranth-300 dark:disabled:bg-amaranth-950',
			ghost:
				'bg-transparent text-black hover:bg-fiord-200 focus:ring focus:ring-fiord-950/15 disabled:bg-transparent disabled:text-fiord-500 dark:text-white dark:hover:bg-fiord-800 dark:active:shadow-fiord-50/15 dark:disabled:bg-transparent dark:disabled:text-fiord-400',
		},
		size: {
			lg: 'size-10',
			md: 'size-9',
			sm: 'size-8',
			xs: 'size-7',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'lg',
	},
})

export type IconButtonVariants = VariantProps<typeof iconButtonVariants>

export interface IconButtonProps {
	/**
	 * Change the visual style of button
	 */
	variant?: IconButtonVariants['variant']
	size?: IconButtonVariants['size']
	class?: HTMLAttributes['class']
	/**
	 * Change the default rendered element for the one passed as a child, merging their props and behavior
	 */
	asChild?: boolean
	icon: string
}

export { default as IconButton } from './IconButton.vue'
