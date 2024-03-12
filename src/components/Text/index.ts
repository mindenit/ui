import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'vue'

export const textVariants = cva('title', {
	variants: {
		type: {
			lead: 'text-xl font-normal',
			large: 'text-lg font-semibold',
			paragraph: 'text-base font-medium leading-7',
			link: 'text-base font-medium leading-7 text-royal-blue-600 transition-all hover:underline',
			small: 'text-sm font-medium leading-[14px]',
			subtitle: 'text-sm font-medium leading-[14px] text-fiord-500'
		}
	},
	defaultVariants: {
		type: 'paragraph'
	}
})

type TextVariants = VariantProps<typeof textVariants>

export interface TextProps {
	type: TextVariants['type']
	class: HTMLAttributes['class']
}

export { default as Text } from './TheText.vue'
