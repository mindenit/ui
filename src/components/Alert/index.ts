import { VariantProps, cva } from 'class-variance-authority'

export const alertVariants = cva(
	'border-fiod-400 box-border inline-flex h-auto min-h-8 w-full items-start justify-start gap-2 rounded-lg border bg-white p-2 dark:border-fiord-700 dark:bg-fiord-900 dark:text-white [&_svg]:size-5',
	{
		variants: {
			status: {
				error: '[&_svg]:text-amaranth-500 dark:[&_svg]:text-amaranth-400',
				warning: '[&_svg]:text-amber-500 dark:[&_svg]:text-amber-400',
				success: '[&_svg]:text-christi-500',
				info: '[&_svg]:text-royal-blue-500 dark:[&_svg]:text-royal-blue-400',
				feature: '[&_svg]:text-fiord-500 dark:[&_svg]:text-fiord-400'
			}
		}
	}
)

export type AlertVariants = VariantProps<typeof alertVariants>

export interface AlertProps {
	status: AlertVariants['status']
}

export { default as Alert } from './TheAlert.vue'
export { default as AlertTitle } from './AlertTitle.vue'
export { default as AlertDescription } from './AlertDescription.vue'
