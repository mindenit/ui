import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'vue'

export const headingVariants = cva('text-black dark:text-white', {
	variants: {
		size: {
			large: 'text-5xl font-extrabold leading-[3rem] tracking-[1.2%]',
			medium: 'text-3xl font-semibold tracking-[0.75%]',
			small: 'text-2xl font-semibold tracking-[0.8%]',
			tiny: 'text-xl font-semibold tracking-[0.5%]'
		}
	},
	defaultVariants: {
		size: 'large'
	}
})

type HeadingVariants = VariantProps<typeof headingVariants>

export interface HeadingProps {
	size: HeadingVariants['size']
	class: HTMLAttributes['class']
}

export { default as Heading } from './TheHeading.vue'
