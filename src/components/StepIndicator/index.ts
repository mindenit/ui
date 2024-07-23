import { cva, VariantProps } from 'class-variance-authority'

export const stepIndicatorVariants = cva(
	'flex w-[230px] items-center rounded-lg p-2 transition-all',
	{
		variants: {
			state: {
				default: 'bg-fiord-200 text-fiord-500 dark:bg-fiord-800',
				active: 'bg-transperent justify-between text-black dark:text-white',
				completed: 'bg-fiord-200 text-fiord-500 dark:bg-fiord-800'
			}
		},
		defaultVariants: {
			state: 'default'
		}
	}
)

export type StepIndicatorVariants = VariantProps<typeof stepIndicatorVariants>

export interface StepIndicatorProps {
	step: number
	state: StepIndicatorVariants['state']
}

export { default as StepIndicator } from './StepIndicator.vue'
