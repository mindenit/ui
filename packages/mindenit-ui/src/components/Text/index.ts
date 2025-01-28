import type { HTMLAttributes } from 'vue'
import { tv, type VariantProps } from 'tailwind-variants'

export const textVariants = tv({
	variants: {
		size: {
			lead: 'text-xl font-normal leading-7 dark:text-white',
			large: 'text-lg font-semibold leading-7 dark:text-white',
			paragraph: 'font-regular text-base leading-7 dark:text-white',
			small: 'text-sm font-medium leading-[14px] dark:text-white',
			subtitle: 'text-sm font-medium leading-[14px] text-fiord-500 dark:text-fiord-400'
		}
	},
	defaultVariants: {
		size: 'paragraph'
	}
})

type TextVariants = VariantProps<typeof textVariants>

export interface TextProps {
	size: TextVariants['size']
	class?: HTMLAttributes['class']
}

export { default as Text } from './TheText.vue'
