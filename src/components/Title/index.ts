import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'vue'

export const titleVariants = cva('title', {
	variants: {
		size: {
			large: 'tracking-[1.2%]; text-5xl font-extrabold leading-[3rem]',
			medium: 'text-3xl font-semibold tracking-[0.75%]',
			small: 'text-2xl font-semibold tracking-[0.8%]',
			tiny: 'text-xl font-semibold tracking-[0.5%]'
		}
	},
	defaultVariants: {
		size: 'large'
	}
})

type TitleVariants = VariantProps<typeof titleVariants>

export interface TitleProps {
	size: TitleVariants['size']
	class: HTMLAttributes['class']
}

export { default as Title } from './TheTitle.vue'
