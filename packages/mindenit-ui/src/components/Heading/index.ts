import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

export const headingVariants = tv({
	base: 'text-black dark:text-white selection:bg-royal-blue-200 dark:selection:bg-royal-blue-900',
	variants: {
		size: {
			large: 'text-5xl font-extrabold leading-[3rem] tracking-[1.2%]',
			medium: 'text-3xl font-semibold tracking-[0.75%]',
			small: 'text-2xl font-semibold tracking-[0.8%]',
			tiny: 'text-xl font-semibold tracking-[0.5%]',
		},
	},
	defaultVariants: {
		size: 'large',
	},
})

type HeadingVariants = VariantProps<typeof headingVariants>

export interface HeadingProps {
	size: HeadingVariants['size']
	class?: HTMLAttributes['class']
}

export { default as Heading } from './TheHeading.vue'
