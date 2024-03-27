import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'vue'

export const checkboxVariants = cva(
	'flex size-5 cursor-pointer items-center justify-center rounded-md border border-solid text-white',
	{
		variants: {
			checked: {
				false:
					'border-fiord-400 bg-white shadow-[0px_2px_4px_0px_#090E1E26] dark:border-[#354152] dark:bg-fiord-950 dark:shadow-[0px_2px_4px_0px_#67748926]',
				true: 'border-royal-blue-700 bg-royal-blue-500 dark:border-royal-blue-400',
				indeterminate: ''
			}
		},
		defaultVariants: {
			checked: false
		}
	}
)

export type CheckboxVariants = VariantProps<typeof checkboxVariants>

export interface CheckboxProps {
	checked: boolean
	class?: HTMLAttributes['class']
}

export { default as Checkbox } from './TheCheckbox.vue'
